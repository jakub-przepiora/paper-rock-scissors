import React, { Component } from 'react';


class ChooseList extends Component{
    constructor(p){
        super(p);
        this.state = {
            EnemyChoose: this.props.EnemyChoose, 
            choose: 0,
            NameChoose: ""
        }
        // alert(thi);
    
        this.choosePaper = this.choosePaper.bind(this);      
        this.chooseRock = this.chooseRock.bind(this);      
        this.chooseScissors = this.chooseScissors.bind(this);      
        this.checker = this.checker.bind(this);
    }
    
    chooseRock() {
        this.setState ({
            choose: 1,
            NameChose: "Rock"
        })


    }
    choosePaper() {
        this.setState({
            choose: 2,
            NameChose: "Paper"
        })


    }
    chooseScissors() {
        this.setState ({
            choose: 3,
            NameChose: "Scissors"
        })

        
    }
    checker(e) {
        if(this.state.choose == this.state.EnemyChoose){
            alert("Nobody win");
            window.location.reload();
        }
        else if (this.state.choose == 1 && this.state.EnemyChoose == 3){
            alert("Player Win!");
            window.location.reload();
        }
        else if (this.state.choose == 3 && this.state.EnemyChoose == 1) {
            alert("Computer Win!");
            window.location.reload();
        }
        else if (this.state.choose > this.state.EnemyChoose)
        {
            alert("Player Win!");
            window.location.reload();
        
        }
        else{
            alert("Computer Win!");
            window.location.reload();
        }
    }
    render(){
       
        console.log(this.props);
        return(
            
            <div>
                <div>
                    <p>Chose: {this.state.NameChose}</p>
                </div>
                <div className="choose-list">
                    <button className="btn Rock" onClick={this.chooseRock}>Rock</button>
                    <button className="btn Paper" onClick={this.choosePaper}>Paper</button>
                    <button className="btn Scissors" onClick={this.chooseScissors}>Scissors</button>
                </div>
                <div>
                    <button onClick={this.checker}>Fight!</button>   
                </div>
            </div>
            
            
        );
    }
}

export default ChooseList;