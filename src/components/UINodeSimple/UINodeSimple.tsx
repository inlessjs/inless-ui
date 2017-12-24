import * as React from 'react';
import { IUINodeProps } from '../../IUINode';
import { ILNodeSocket } from '../../ILNode';
import { ILStyles } from '../../types';

export interface IUINodeSimpleProps extends IUINodeProps {
    styles: ILStyles;
}

export const UINodeSimple = ({ node, styles, selectSocket }: IUINodeSimpleProps) => {
    const { id, name, input, output } = node;
    const renderSockets = (sockets: ILNodeSocket[]) => sockets.map(socket => {
        const { id, isConnected, isHighlighted, role } = socket;
        return (
            <div key={id} className={styles.socket} onClick={() => selectSocket(socket, node)}>
                [{role}] {id} { isConnected ? 'connected' : 'not connected' } { isHighlighted ? 'hovered' : 'waiting' }
            </div>
        );
    });

    return (
        <div key={id} className={styles.node}>
            node: { id }
            { renderSockets(input) }
            { renderSockets(output) }
        </div>
    );
};
