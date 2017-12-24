import * as React from 'react';
import { ILNode, ILNodeSocket } from './ILNode';

export interface IUINodeProps {
    node: ILNode;
    selectSocket: (socket: ILNodeSocket, node: ILNode) => void;
    [any: string]: any;
}

export declare type IUINode = (props: IUINodeProps) => React.ReactElement<any>;
