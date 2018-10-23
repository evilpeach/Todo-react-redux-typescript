import React from 'react';

export interface DispatchProps {
    clearDoneTodo: () => void
}

interface State {}

export default class Options extends React.Component<DispatchProps, State> {
    constructor(props: DispatchProps) {
        super(props);
        
    }

    clearDoneTodo = (): void => {
        alert('Clear done to do list ');
        this.props.clearDoneTodo();
    }

    render() {
        return(
            <div>
                <button onClick={this.clearDoneTodo}>Clear Done List</button>
            </div>
        )
    }
}