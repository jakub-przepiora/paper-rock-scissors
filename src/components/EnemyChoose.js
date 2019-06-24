import React, { Component } from 'react';

class EnemyChoose extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         EnemyChoose: null
    //     }
        
    // }
    
    
    render(){
        const {EnemyChoose} = this.props;
        return(
            <h2>{EnemyChoose}</h2>
        );
    }
}

export default EnemyChoose;