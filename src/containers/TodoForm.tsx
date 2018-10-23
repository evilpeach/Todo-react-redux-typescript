import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
import AddForm, { DispathProps } from '../components/AddForm';

const mapDispatchToProps = {
    handleSubmit: addTodo
}

const TodoForm = connect<any, DispathProps, any>(null, mapDispatchToProps)(AddForm);

export default TodoForm;