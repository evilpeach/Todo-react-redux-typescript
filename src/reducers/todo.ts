import { Todos } from '../models/Todo';
import { ActionTypes, Action } from '../actions/todo';

// initialze state
export const initialState: Todos = {
  todos: []
}

export const rootReducer = (state: Todos = initialState, action: Action): Todos => {
  switch(action.type) {
    case ActionTypes.ADD: {
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    }

    case ActionTypes.TOGGLE: {
      const toggleId = action.payload.id;

      return {
        ...state,
        todos: state.todos.map(todo => todo.id === toggleId ? {...todo, status: !todo.status } : todo)
      }
    }

    default:
      return state
  }
}