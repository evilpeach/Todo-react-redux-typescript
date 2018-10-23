import { Todo } from '../models/Todo';
import { ActionTypes, Action } from '../actions/todo';

export interface MyReduxState {
  todos: Todo[]
}

// initialze state
const initialState: MyReduxState = {
  todos: []
}

export const rootReducer = (state: MyReduxState = initialState, action: Action) => {
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

    case ActionTypes.DELETE_DONE: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.status)
      }
    }

    default:
      return state
  }
}