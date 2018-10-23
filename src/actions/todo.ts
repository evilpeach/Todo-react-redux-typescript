import { Todo } from '../models/Todo';

const uuid = require('node-uuid');

// create type by enum
export enum ActionTypes {
  ADD = 'ADD',
  TOGGLE = 'TOGGLE',
  DELETE_DONE = 'DELETE_DONE'
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

interface DeleteDoneTodoAction {
  type: ActionTypes.DELETE_DONE
}

// add new todo
export const addTodo = (title: string): AddTodoAction => {
  return {
    type: ActionTypes.ADD,
    payload: {
      todo: {
        id: uuid.v4(),
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

export const deleteDoneTodo = (): DeleteDoneTodoAction => {
  return {
    type: ActionTypes.DELETE_DONE
  }
}

export type Action = AddTodoAction | ToggleTodoAction | DeleteDoneTodoAction;