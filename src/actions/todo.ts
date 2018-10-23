import { Todo } from '../models/Todo';

// create type by enum
export enum ActionTypes {
  ADD = 'ADD',
  TOGGLE = 'TOGGLE'
}

interface AddTodoAction {
  type: ActionTypes.ADD,
  payload: {
    todo: Todo
  }
}

interface ToggleTodoAction {
  type: ActionTypes.TOGGLE,
  payload: {
    id: number
  }
}

let id = 0; // for next TODO's id

// add new todo
export const addTodo = (title: string): AddTodoAction => {
  return {
    type: ActionTypes.ADD,
    payload: {
      todo: {
        id: id++,
        title: title,
        status: false
      }
    }
  }
}

// call action to send id to reducer
export const toggleTodo = (id: number): ToggleTodoAction => {
  return {
    type: ActionTypes.TOGGLE,
    payload: {
      id: id
    }
  }
}

export type Action = AddTodoAction | ToggleTodoAction;