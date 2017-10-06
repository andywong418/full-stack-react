import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
const dummyData = [
  "List number 1",
  "List number 2",
  "List number 3",
  "List number 4",
  "List number 5"
]


export default class ToDoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          {dummyData.map((todo) => <ToDoItem item={todo} />)}
        </ul>
      </div>
    )
  }
}
