import Options, { DispatchProps } from '../components/Options';
import { deleteDoneTodo } from '../actions/todo';
import { connect } from 'react-redux';
  
const mapDispatchToProps = {
    clearDoneTodo: deleteDoneTodo
}
  
const TodoOptions = connect<any, DispatchProps, any>(null, mapDispatchToProps)(Options);

export default TodoOptions;