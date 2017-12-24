import * as React from 'react';
import { render } from 'react-dom';
import { ILNode } from './ILNode';
import { UIScene } from './components/UIScene/UIScene';
import { UINodeSimple } from './components/UINodeSimple/UINodeSimple';

const renderers = {
    'test': UINodeSimple
};

const nodes: ILNode[] = [
    {
        id: 'test',
        name: 'test',
        input: [
            {
                id: 'firstname',
                isConnected: false,
                isHighlighted: true,
                role: 'input',
                type: 'string',
            },
            {
                id: 'secondname',
                isConnected: true,
                isHighlighted: false,
                role: 'input',
                type: 'string',
            }
        ],
        output: [],
        x: 200,
        y: 400,
    },
    {
        id: 'test2',
        name: 'test',
        input: [
            {
                id: 'value',
                isConnected: false,
                isHighlighted: true,
                role: 'input',
                type: 'string',
            }
        ],
        output: [
            {
                id: 'result',
                isConnected: true,
                isHighlighted: false,
                role: 'output',
                type: 'string',
            }
        ],
        x: 10,
        y: 0,
    }
];

render(<UIScene nodes={nodes} renderers={renderers} selectSocket={(socket) => console.log('selected', socket)} />, document.getElementById('app'));
// render(<div>Bliad</div>, document.getElementById('app'));
