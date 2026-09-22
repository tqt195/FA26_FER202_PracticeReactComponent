import React, { Component } from 'react'
import { footballers } from './shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: footballers
        };
     }
  render() {
    return <PlayersPresentation players={this.state.players}/>
  }
}
export default Main
