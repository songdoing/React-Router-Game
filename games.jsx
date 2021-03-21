import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import NumberBaseball from '../numberBaseball/numberBaseballClass';
import Rps from '../rockPaperScissors/rpsClass';
import Lotto from '../lotto/lottoClass';

const Games = () => {
    
    return(
        <BrowserRouter>
            <div>
                <Link to="/number-baseball">Number Baseball</Link>
                &nbsp;
                <Link to="/rock-scissors-paper">Rock Scissors Paper</Link>
                &nbsp;
                <Link to="/lotto-generator">Lotto Generator</Link>
                &nbsp;
            </div>
            <div>
                <Route path="/number-baseball" component = {NumberBaseball}/>
                <Route path="/rock-scissors-paper" component = {Rps}/>
                <Route path="/lotto-generator" component = {Lotto}/>
            </div>        
        </BrowserRouter>
    );
};

export default Games;