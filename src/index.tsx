import * as React from 'react';
import { render } from 'react-dom';

import { UINodeList } from './components/UINodeList';

const nodes = [
    {
        id: 1,
        renderer: 'test'
    },
    {
        id: 2,
        renderer: 'test2'
    },
    {
        id: 3,
        renderer: 'test2'
    }
];

const renderers = {
    test: (node: any) => {
        return <div key={node.id}>Node renderer by Test</div>;
    },
    test2: (node: any) => {
        return <div key={node.id}>And node renderer by Test2</div>;
    },
};

const rendererRef = (node: any, renderers: any) => {
    return renderers[node.renderer];
};

const style = {
    nodeSet: 'global-node-set',
};

render(<UINodeList nodes={nodes} renderers={renderers} rendererRef={rendererRef} style={style} />, document.getElementById('app'));
