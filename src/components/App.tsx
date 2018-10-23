import React from 'react';
import TodoList from '../containers/TodoList';
import TodoOptions from '../containers/TodoOptions';
import TodoForm from '../containers/TodoForm';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoForm />
                <TodoOptions />
                <TodoList />
            </div>
        );
    }
}