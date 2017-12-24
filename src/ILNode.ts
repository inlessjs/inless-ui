export interface ILNodeSocket {
    id: string;
    type: string;
    role: string;
    isConnected: boolean;
    isHighlighted: boolean;
}

export interface ILNode {
    id: string;
    name: string;
    input: ILNodeSocket[];
    output: ILNodeSocket[];
    x: number;
    y: number;
}
