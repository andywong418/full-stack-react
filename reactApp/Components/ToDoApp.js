import React, {Component} from 'react';
import InputForm from './InputForm';
import ToDoList from './ToDoList';

export default class ToDoApp extends Component{
  constructor(props){
    super(props);
    this.state= {
      toDoList: [
        { taskText: "Catch 'em all", completed: false },
        { taskText: "Free 'em all", completed: false },
        { taskText: "Screw 'em all", completed: false },
        { taskText: "Beat 'em all", completed: true }
      ]

    }
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(todo){

    this.setState({toDoList: this.state.toDoList.slice().concat({
      taskText: todo,
      completed: false
    })})
  }

  render(){
    return(
      <div className="container" style={{padding: '30px'}}>
        <InputForm addToDo = {this.addToDo}/>
        <ToDoList todos={this.state.toDoList}/>
      </div>
    )
  }



}
