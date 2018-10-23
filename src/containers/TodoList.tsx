import List , { StateProps, DispatchProps } from '../components/List';
import { toggleTodo } from '../actions/todo';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({  
    todos : state.todos
})
  
const mapDispatchToProps = {
    onTodoClicked: toggleTodo
}
  
const TodoList = connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)(List);

export default TodoList;