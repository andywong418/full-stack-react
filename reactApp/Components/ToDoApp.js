import React, {Component} from 'react';
import InputForm from './InputForm';
import ToDoList from './ToDoList';
import axios from 'axios';
const dbUrl = "http://localhost:3000/db";

export default class ToDoApp extends Component{
  constructor(props){
    super(props);
    this.state= {
      toDoList: [
        { task: "Catch 'em all", completed: false },
        { task: "Free 'em all", completed: false },
        { task: "Screw 'em all", completed: false },
        { task: "Beat 'em all", completed: true }
      ]

    }
    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(todo){

    axios.post(dbUrl + '/add', {
      taskText: todo,
      completed: false
    })
    .then(function(response){
      console.log(response);
      this.setState({ toDoList: this.state.toDoList.concat(response.data)});
    }.bind(this))
    .catch(function(err){
      console.log(err);
    })
  }

  removeToDo(index){
    var newArr = this.state.toDoList.slice();
    newArr.splice(index, 1);
    this.setState({toDoList: newArr});
  }

  render(){
    return(
      <div className="container" style={{padding: '30px'}}>
        <InputForm addToDo = {this.addToDo}/>
        <ToDoList todos={this.state.toDoList} removeToDo={this.removeToDo}/>
      </div>
    )
  }



}
