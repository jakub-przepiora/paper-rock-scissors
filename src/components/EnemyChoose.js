import React, { Component } from 'react';

class EnemyChoose extends Component{
        
    render(){
        const {EnemyChoose} = this.props.EnemyChoose;
        return(
            <h2>{EnemyChoose}</h2>
        );
    }
}

export default EnemyChoose;