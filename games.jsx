import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import NumberBaseball from '../numberBaseball/numberBaseballClass';
import Rps from '../rockPaperScissors/rpsClass';
import Lotto from '../lotto/lottoClass';

const Games = () => {
    
    return(
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball">Number Baseball</Link>
                &nbsp;
                <Link to="/game/rock-scissors-paper">Rock Scissors Paper</Link>
                &nbsp;
                <Link to="/game/lotto-generator">Lotto Generator</Link>
                &nbsp;
            </div>
            <div>
                {/* <Route path="/number-baseball" component = {NumberBaseball}/>
                <Route path="/rock-scissors-paper" component = {Rps}/>
                <Route path="/lotto-generator" component = {Lotto}/> */}
                {/* 게임갯수가 너무 많아지면 router가 커지기 때문에 다이나믹라우트매칭 */}
                <Route path = '/game/:name' component = {GameMatcher} />
            </div>        
        </BrowserRouter>
    );
};

export default Games;