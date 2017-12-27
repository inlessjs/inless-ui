import * as React from 'react';
import { renderList, IUIListProps as IUIListPropsDefault, IUIRenderer } from './renderList';

export interface IUIListProps extends IUIListPropsDefault {
    container?: IUIRenderer;
    className?: string;
}

export const UIList = (props: IUIListProps) => {
    const { nodes, renderers, container, className } = props;

    const nodeElements = renderList(props);

    if (container) {
        const Container = container;
        return <Container>{ nodeElements }</Container>;
    }
    return <div className={ className }>{ nodeElements }</div>;
};