import React, { Component } from 'react';

class Bitbtn extends Component {
  constructor (props) {
    super(props)
    this.btn_fn = this.props.btn_fn
    this.id = this.props.myid
  }
  //
  // call_fn() {
  //   this.btn_fn()
  // }
// onClick={() => this.handleSort(column)}
    render() {
        return (
            <div onClick={() => this.btn_fn(this.id)} className="bit-btn" >
              {this.props.myid}
              {console.log("bit btn" + this.id)}
            </div>
        );
    }
}

export default Bitbtn;
