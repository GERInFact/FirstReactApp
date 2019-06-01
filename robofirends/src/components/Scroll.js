import React, { Component } from 'react';

class Scroll extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div style={{overflowY: 'scroll', height: '500px'}}>
                {
                    this.props.children
                }
            </div>
         );
    }
}
 
export default Scroll;