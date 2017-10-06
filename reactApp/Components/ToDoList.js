import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
const dummyData = [
  { taskText: "Catch 'em all", completed: false },
  { taskText: "Free 'em all", completed: false },
  { taskText: "Screw 'em all", completed: false },
  { taskText: "Beat 'em all", completed: true }
]


export default class ToDoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {todos} = this.props;
    return(
      <div>
        <ul>
          {todos.map((todo, index, array) => <ToDoItem onClick= {this.props.removeToDo} index={index} item={todo.task} completed= {todo.completed}/>)}
        </ul>
      </div>
    )
  }
}
