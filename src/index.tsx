import * as React from 'react';
import { render } from 'react-dom';

import { UIList, IUIListProps } from './components/UIList';

class Test extends React.Component<{ node: any }> {
    render() {
        return <div>Statefull component</div>;
    }
}

const props: IUIListProps = {
    nodes: [
        {
            id: 1,
            renderer: 'test'
        },
        {
            // id: 2,
            renderer: 'test3'
        },
        {
            id: 3,
            renderer: 'test23'
        }
    ],
    renderers: {
        test: (props: any) => {
            return <div>Node renderer by Test</div>;
        },
        test2: (props: any) => {
            return <div>And node renderer by Test2</div>;
        },
        test3: Test,
    },
    rendererRef: (node: any, renderers: any) => node.renderer,
    defaultRendererRef: () => 'test',
    keyRef: (node: any): string => 'id',
    // container: ({ children }: any) => {
    //     return (
    //         <div>
    //             <h1>This is my nodes</h1>
    //             { children }
    //         </div>
    //     );
    // },
    className: 'bubi',
};

render(<UIList {...props} />, document.getElementById('app'));
