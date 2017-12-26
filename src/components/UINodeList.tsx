import * as React from 'react';
import { IUINodeRenderer, IUIStyle } from '../types';

export interface IUINodeListProps {
    renderers: { [nodeName: string]: IUINodeRenderer };
    nodes: any[];
    style?: IUIStyle;
    // key name in node to find renderer by
    rendererRef?: string | ((node: any, renderers: { [nodeName: string]: IUINodeRenderer }) => IUINodeRenderer);
}

const DEFAULT_RENDERER_REF = 'renderer';

const getRenderer = (node: any, { rendererRef, renderers }: IUINodeListProps) => {
    if (typeof rendererRef === 'function') return rendererRef(node, renderers);
    return renderers[node[ rendererRef || DEFAULT_RENDERER_REF ]]
};

export const UINodeList = (props: IUINodeListProps) => {
    const { nodes, renderers, rendererRef, style } = props;
    const rendererKey = rendererRef || DEFAULT_RENDERER_REF;
    const nodeElements = nodes.reduce((elements, node) => {
        const renderer = getRenderer(node, props);
        if (!renderer) {
            if (typeof rendererKey === 'string')
                console.error(`UINodeSet: There is no "${node[rendererKey]}" renderer`);
            else
                console.error(`UINodeSet: Renderer not found; node: `, node);
            return elements; 
        }

        const element = renderer(node);
        if (!element.key) {
            if (typeof rendererKey === 'string')
                console.error(`UINodeSet: Renderer should return the element with set "key" to unique value, check your "${node[rendererKey]}" renderer. Result will be omitted`);
            else
                console.error('UINodeSet: Renderer should return the element with set "key" to unique value. Result will be omitted; node: ', node);
            return elements;
        }

        elements.push(element);
        return elements;
    }, []);

    return (
        <div className={ style ? style.nodeSet : null }>{ nodeElements }</div>
    );
};
