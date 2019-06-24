import React, { Component } from 'react';
import ChooseList from './ChooseList.js';
import EnemyChoose from './EnemyChoose.js';

class Area extends Component{
    constructor(p){
        super();
        const min = 1;
        const max = 4;
        const random = Math.floor(Math.random() * (+max - +min)) + +min;
        this.state = {
            EnemyChoose: random,
            choose: null
        }
    }
        
    render(){
        
        return(
            <div>
                <h1>Arena</h1>
                <h3>Enemy choose</h3>
                <EnemyChoose
                EnemyChoose = {this.state.EnemyChoose}
                />
                <h3>Your choose</h3>
                <ChooseList/>
                
            </div>
            
        );
    }
}

export default Area;