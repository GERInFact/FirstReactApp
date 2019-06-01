import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
            <div>
                {
                    this.props.robots.map( r => 
                    <Card key={r.id} robot={r} />
                    )
                }
            </div>
         );
    }
}
 
export default CardList;