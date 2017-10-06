import React, {Component} from 'react';

function renderItem(item, completed, index){
  if(completed){
    return <strike> <li key={index}> {item} </li> </strike>
  }
  return <li key={index}> {item} </li>
}

function handleClick(props){
  props.onClick(props.index);
}
export default function ToDoItem(props) {



  return(
    <div className="row">
      <div className="col-sm-2">
        {renderItem(props.item, props.completed, props.index)}
      </div>
      <div className="col-sm-4">
        <i onClick={() => { handleClick(props)}} key={props.index.toString()}  style={{color: 'red'}} className="fa fa-window-close" aria-hidden="true"></i>
      </div>
    </div>
  )
}
