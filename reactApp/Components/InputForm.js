import React, {Component} from 'react';


export default class InputForm extends Component{
  constructor(props){
    super(props);
    this.state= {
      toDoText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
  }
  handleInputChange(event){
    this.setState({toDoText: event.target.value});
  }

  handleSubmitChange(event){
    event.preventDefault();
    this.props.addToDo(this.state.toDoText);
    this.setState({toDoText: ''});
  }
  render(){
    return(
      <div className="row">
        <form onSubmit={this.handleSubmitChange}>
          <div className="col-sm-8 form-group">
            <input style={{display: 'inline', width: '80%'  }} type="text" name="todo" value={this.state.toDoText} onChange={this.handleInputChange} className="form-control col-sm-4" placeholder="Add To do..." />
            <button style={{marginLeft: '30px'}}type="submit" className="btn btn-default"> Add to do</button>
          </div>
        </form>
      </div>
    )
  }
}
