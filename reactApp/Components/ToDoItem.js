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
export default class ToDoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: true
    }
    this.setToggle = this.setToggle.bind(this);
  }

  setToggle(){
    console.log("HI")
    this.setState({show: this.state.show ? false : true})
  }
  render(){
    return(

      <div className="row">
          <div className={this.state.show ? 'active-element' : 'hidden-element'}>
        <div className="col-sm-2">
          {renderItem(this.props.item, this.props.completed, this.props.index)}
        </div>
        </div>
        <div className="col-sm-4">
          <i onClick={() => { handleClick(this.props)}} key={this.props.index.toString()}  style={{color: 'red'}} className="fa fa-window-close" aria-hidden="true"></i>
          <a onClick={this.setToggle} className="btn btn-default" style={{marginLeft: '10px'}}> {this.state.show ? "Hide" : "Show"}</a>
        </div>
      </div>

    )
  }


}
