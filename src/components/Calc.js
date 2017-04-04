import React, { Component } from 'react';
import Bitbtn from './Bitbtn'

class Calc extends Component {
    constructor (props) {
      super(props)
      this.int_of_bit = 0
    }

    toggle_bit(a) {
        console.log("toggle bit called", a)
        //let converted =
        let vv = (1 << a)
        this.int_of_bit = this.int_of_bit | vv
        document.getElementById('input1').value = this.int_of_bit;
    }

    render_btns = () => {
      let arr = []
      
      for (var i = this.props.number_of_bits-1; i > -1; i--) {
        arr.push(<Bitbtn key={i} myid={i} btn_fn={this.toggle_bit} />)
      }
      //console.log(arr);
      return arr;
    }

    render() {
        return (
            <div >
              <input type="text" id="input1" />
              <hr />

              {this.render_btns()}

            </div>
        );
    }
}

export default Calc;



// <Bitbtn myid="1" btn_fn={this.toggle_bit} />
