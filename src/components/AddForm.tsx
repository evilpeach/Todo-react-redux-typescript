import React from 'react';
import store from '../../store/index';
 
export interface DispathProps {
  handleSubmit: (value: string) => void
}

interface State{
  title: string;
}

export default class AddForm extends React.Component<DispathProps, State> {
  constructor(props: DispathProps) {
    super(props);
    
    this.state = {
      title: ''
    }

    this.handleChange.bind(this.handleChange);
    this.handleSubmit.bind(this.handleSubmit);
  }

  // Debug redux store
  componentWillMount() {
    store.subscribe(() => console.log('Test ', store.getState().todos.map((todo: any) => todo.title)));
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const title = this.state.title;
    this.props.handleSubmit(title);
    this.setState({
      title: ''
    })
    e.preventDefault();
  }

  render() {
    const titleValid = (this.state.title) ? false : true;
    const buttonStyle = 'background-color: white; color: blue; border: 2px solid blue;'
  
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          WHAT YOU WANT TO DO: 
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <input type="submit" disabled={titleValid} value="Submit" />
      </form>
    );
  }
}