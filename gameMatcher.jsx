import React, { Component } from 'react';
import NumberBaseball from '../numberBaseball/numberBaseballClass';
import Rps from '../rockPaperScissors/rpsClass';
import Lotto from '../lotto/lottoClass';

class GameMatcher extends Component {
    render() {
        console.log(this.props);
        if (this.props.match.params.name === 'number-baseball') {
            return <NumberBaseball/>
        } else if (this.props.match.params.name === 'rock-scissors-paper') {
            return <Rps/>
        } else if (this.props.match.params.name === 'lotto-generator') {
            return <Lotto/>
        }
        return (
           <div>No game.</div>
        );
    }
}

export default GameMatcher;