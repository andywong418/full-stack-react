import React, {Component} from 'react';


export default class InputForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
        <form>
          <div className="col-sm-8 form-group">
            <input style={{display: 'inline', width: '80%'  }} type="text" name="todo" className="form-control col-sm-4" placeholder="Add To do..." />
            <button style={{marginLeft: '30px'}}type="submit" className="btn btn-default"> Add to do</button>
          </div>
        </form>
      </div>
    )
  }
}
