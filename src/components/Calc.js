import React, { Component } from 'react';
import Bitbtn from './Bitbtn'

class Calc extends Component {
    constructor (props) {
      super(props);
      this.state = {int_of_bit: 0};
    }

    toggle_bit = (a) => {
        console.log("toggle bit called", a)
        //let converted =
        let vv = (1 << a);
        console.log(vv, this.state.int_of_bit);
        this.state.int_of_bit = this.state.int_of_bit ^ vv;
        console.log("this.int_of_bit", this.state.int_of_bit);
        document.getElementById('input1').value = this.state.int_of_bit;
        document.getElementById('input2').value = this.state.int_of_bit.toString(2);
    }
    render_btns = () => {
      let arr = [];
      arr.push(<span key="999" id="spanner" > </span>)
      for (var i = this.props.number_of_bits-1; i > -1; i--) {
        arr.push(<Bitbtn key={i} myid={i} btn_fn={this.toggle_bit} />)
      }
      return arr;
    }

    render() {
        return (
            <div >
              <input type="text" id="input1" className='inpt' />
              <hr />
              <input type="text" id="input2"  className='inpt' />
              <hr />
              {this.render_btns()}
            </div>
        );
    }
}

export default Calc;



// <Bitbtn myid="1" btn_fn={this.toggle_bit} />
