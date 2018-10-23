import React from 'react';
// import Redux from 'redux';
import store from '../../store/index';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';
 
interface DispathProps {
  handleSubmit: (value: string) => void
}

interface State{
  title: string;
}

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

class TodoForm extends React.Component<DispathProps, State> {
  constructor(props: DispathProps) {
    super(props);
    
    this.state = {
      title: ''
    }

    this.handleChange.bind(this.handleChange);
    this.handleSubmit.bind(this.handleSubmit);
  }

  // Test redux
  componentWillMount() {
    store.subscribe(() => console.log('Test ', store.getState().todos.map(todo => todo.title)));
  }

  handleChange = (e: HandleNameChangeInterface): void => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSubmit = (e: any) => {
    const title = this.state.title;
    alert(title);
    this.props.handleSubmit(title);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          WHAT YOU WANT TO DO:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
//   return {
//     addTodo: (title: string) => dispatch(addTodo(title))
//   };
// }

const mapDispatchToProps = {
  handleSubmit: addTodo
}

const Form = connect<any, DispathProps, any>(null, mapDispatchToProps)(TodoForm);

export default Form;