import React from 'react';
import { Todo, Todos as State} from '../models/Todo';
import { toggleTodo } from '../actions/todo';
import { connect } from 'react-redux';

interface StateProps {
  todos: State,
}

interface DispatchProps {

}

interface ownState {

}

class TodoList extends React.Component<StateProps, ownState> {
  constructor(props: StateProps){
    super(props);

  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {
          
          todos.todos.map((todo: Todo) => (
            <li key={todo.id} onClick={() => this.props.onTodoClicked(todo.id)}
            style={{ textDecoration: `${todo.status ? 'line-through' : ''}`, cursor: 'pointer'}}>
            {todo.title}
            </li>)
          )
          
        }
      </ul>
    )
  }
}

// const getTodosState = ((state: State) => state.todos)
// const getTodos = createSelector([getTodosState], s => s.todos);

const mapStateToProps = (state: State) => ({  
  todos : state.todos
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo
}

const List = connect<StateFromProps, any, any>(, mapDispatchToProps)(TodoList);

export default List;
