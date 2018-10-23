import React from 'react';
import { Todo } from '../models/Todo';

export interface StateProps {
  todos: Todo[]
}

export interface DispatchProps {
  onTodoClicked: (id: number) => any
}

interface ownState {

}

type Props = StateProps & DispatchProps;

export default class List extends React.Component<Props, ownState> {
  constructor(props: Props){
    super(props);

  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {
        todos.map((todo: Todo) => (
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