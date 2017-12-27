import * as React from 'react';

export declare type IUIRenderer = React.StatelessComponent<IUIRendererProps> | (new(...args: any[]) => React.Component<IUIRendererProps | any>);

export interface IUIRendererProps {
    node: any;
    [any: string]: any;
}

export interface IUIListProps {
    nodes: any[];
    renderers: IUIRenderersMap;
    rendererRef: string | ((node: any, nodes: any[]) => string);
    defaultRendererRef?: string | ((node: any, nodes: any[]) => string);
    keyRef: string | ((node: any, nodes: any[]) => string);
}

interface IUIRenderersMap {
    [key: string]: IUIRenderer;
}

const getRenderer = (node: any, { rendererRef, renderers, defaultRendererRef, nodes }: IUIListProps): IUIRenderer => {
    const rendererName = typeof rendererRef === 'string' ? node[rendererRef] : rendererRef(node, nodes);
    const defaultRendererName = typeof defaultRendererRef === 'string' ? defaultRendererRef : defaultRendererRef(node, nodes);
    const renderer = renderers[rendererName];
    if (!renderer) {
        console.warn(`Renderer "${rendererName}" is not found. Fallback to default "${defaultRendererName}" renderer. Node: `, node);
        return renderers[defaultRendererName];
    }
    return renderer;
};

const getKey = (node: any, { keyRef, nodes }: IUIListProps) => {
    const keyName = typeof keyRef === 'string' ? node[keyRef] : keyRef(node, nodes);
    const key = node[keyName];
    if (!key) console.error(`Can't get key by "${keyName}" from node. Node: `, node);
    return key;
};

/**
 * Render list with set of custom renderers
 * @param {IUIListProps} props
 * @return {Element[]}
 */
export const renderList = (props: IUIListProps) => {
    const { nodes, renderers } = props;

    return nodes.reduce((elements, node, index) => {
        const Renderer = getRenderer(node, props);
        if (!Renderer) {
            console.error('There is no renderer for node: ', node);
            return elements;
        }

        const key = getKey(node, props);
        if (!key) return elements;
        
        elements.push(<Renderer key={ key } node={ node } />);
        return elements;
    }, []);
};