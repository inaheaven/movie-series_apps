import React, { Component } from 'react';
import spinner from './spinner.gif'
class Spinner extends Component {

    render() {
        return(
            <div>
              <img src={spinner} style={{width:'200px', margin:'auto', display:'block'}} alt='loading'/>
            </div>
        );
    }
}
export default Spinner;
