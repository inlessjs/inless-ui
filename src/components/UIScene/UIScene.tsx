import * as React from 'react';
import { ILNode, ILNodeSocket } from '../../ILNode';
import { IUINode } from '../../IUINode';

export interface IUISceneProps {
    nodes: ILNode[];
    renderers: { [name: string]: IUINode }
    selectSocket: (socket: ILNodeSocket, node: ILNode) => void;
}

export const UIScene = ({ nodes, renderers, selectSocket }: IUISceneProps) => {
    return <div>{nodes.map(node => renderers[node.name]({ node, selectSocket }))}</div>;
};
