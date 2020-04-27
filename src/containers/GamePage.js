import React from 'react';
import { render } from 'react-dom';

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            userNames: {
                1: "",
                2: "",
                3: "",
                4: ""
            }
            
        }
    }
    


    addUserNames = (num) => {
        let html = []
        for(let i=0; i<num; i++) {
            html.push(<label>{`Player ${i+1}`}<input type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers}/></label>)
        }
        
        return html
    }

    updateUsers = (e) => {
        e.preventDefault();
        const obj = e.target.name
        const name = e.target.value
        this.setState({ userNames: { ...this.state.userNames, [obj]: name}})
    }


    componentDidMount() {
        let number;
        let dif;
        let cat;
       
            number = this.props.match.params.playersNumber;
            dif = this.props.match.params.difficulty;
            cat = this.props.match.params.category;
            this.setState({
                playersNumber: number,
                difficulty: dif, 
                category: cat
            });
       
        console.log(number);
       
    }


    render()  {
       
       
        console.log(this.state);
        return(
            <div className='GamePage'>
                <h1>Game Page</h1>
                <form>
                <h3>Enter player name{this.state.playersNumber > 1? "s":""}</h3>
                {this.addUserNames(this.state.playersNumber)}
                <input type="submit" onClick="" />
                </form>
            </div>
        );
    }
   
}

export default GamePage;