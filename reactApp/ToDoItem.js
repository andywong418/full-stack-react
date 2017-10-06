import React, {Component} from 'react';


export default function ToDoItem(props) {

  return(
    <div>
    <li> {props.item} <i style={{color: 'red', marginLeft: '20px'}} className="fa fa-window-close" aria-hidden="true"></i></li>

    </div>
  )
}
