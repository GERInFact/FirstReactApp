import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div style={{marginBottom: '3rem'}}>
                <input type="text" onChange={this.props.searchField} style={{padding: '1rem',  border: '0', backgroundColor: 'rgb(6, 21, 57)', color: 'white'}} placeholder="Name"/>
            </div>
         );
    }
}
 
export default SearchField;