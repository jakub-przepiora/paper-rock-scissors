import React, { Component } from 'react';


class ChooseList extends Component{
    constructor(p){
        super(p);
        this.state = {
            // EnemyChoose: 
            choose: 0,
            
        }
        // alert(thi);
    
        this.choosePaper = this.choosePaper.bind(this);      
        this.chooseRock = this.chooseRock.bind(this);      
        this.chooseScissors = this.chooseScissors.bind(this);      
        this.checker = this.checker.bind(this);
    }
    choosePaper(){
        this.setState({
            choose: 1,
        })
        alert("choose paper");
        // e.preventDefault();
    }
    chooseRock() {
        this.setState ({
            choose: 2,
        })
        alert("choose Rock");

    }
    chooseScissors() {
        this.setState ({
            choose: 3,
        })
        alert("choose Scissors");
        
    }
    checker(e) {
        alert(this.state.choose);

    }
    render(){
        const choose = this.state.choose; 
        return(
            
            <div>
                <div>
                    <p>Chose: {this.state.choose}</p>
                </div>
                <div className="choose-list">
                    <button onClick={this.choosePaper}>Paper</button>
                    <button onClick={this.chooseRock}>Rock</button>
                    <button onClick={this.chooseScissors}>Scissors</button>
                </div>
                <div>
                    <button onClick={this.checker}>GO!</button>   
                </div>
            </div>
            
            
        );
    }
}

export default ChooseList;