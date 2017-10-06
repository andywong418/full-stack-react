import React, {Component} from 'react';

function renderItem(item, completed){
  if(completed){
    return <strike> <li> {item} </li> </strike>
  }
  return <li> {item} </li>
}
export default function ToDoItem(props) {



  return(
    <div className="row">
      <div className="col-sm-2">
        {renderItem(props.item, props.completed)}
      </div>
      <div className="col-sm-4">
        <i style={{color: 'red'}} className="fa fa-window-close" aria-hidden="true"></i>
      </div>
    </div>
  )
}
