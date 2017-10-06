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
  }

  render(){
    return(
      <div className="container" style={{padding: '30px'}}>
        <InputForm />
        <ToDoList todos={this.state.toDoList}/>
      </div>
    )
  }



}
