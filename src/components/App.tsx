import React from 'react';
// import TodoList from '../containers/TodoList';
// import TodoOptions from '../containers/TodoOptions';
// import TodoForm from '../containers/TodoForm';
import Loadable from 'react-loadable';

const TodoForm = Loadable({
    loader: () => import(/* webpackChunkName: "todo.form" */'../containers/TodoForm'),
    loading: () => <div>loading Todoform ...</div>
});

const TodoList = Loadable({
    loader: () => import(/* webpackChunkName: "todo.list" */'../containers/TodoList'),
    loading: () => <div>loading Todolist ...</div>
})

const TodoOptions = Loadable({
    loader: () => import(/* webpackChunkName: "todo.options" */'../containers/TodoOptions'),
    loading: () => <div> loaing TodoOptions ...</div>
})

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