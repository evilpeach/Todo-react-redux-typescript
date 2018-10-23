import React from 'react';
import TodoList from '../containers/TodoList';
import TodoOptions from '../containers/TodoOptions';
import TodoForm from '../containers/TodoForm';

export default class App extends React.Component {
    render() {
        const bgStyle = {
            margin: 'auto',
            width: '50%',
            padding: '10px',
        }
        return (
            <div style={bgStyle} >
                <TodoForm />
                <TodoOptions />
                <TodoList />
            </div>
        );
    }
}