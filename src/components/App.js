import React from 'react';

import Scoreboard from './Scoreboard.js';
import Inning from './Inning.js';
import Score from './Score.js';

const game = {
  "innings": [
    [0,1],
    [0,0],
    [0,0],
    [5,0],
    [2,2],
    [0,0],
    [0,0],
    [0,0],
    [7,0]
  ],
  "teams": {
    "home": "Toronto",
    "away": "Boston"
  }
};


class App extends React.Component {
  renderInning(inning) {
    return (
      <Inning>
        <Score score={inning[0]} />
        <Score score={inning[1]} />
      </Inning>
    );
  }

  render() {
    return (
      <div className="scoreboard-container">
        <Scoreboard>
          <div className="labels">
            <label>Top</label>
            <label>Bot</label>
          </div>
          <div className="scores">
            {game.innings.map(i => this.renderInning(i))}
          </div>
        </Scoreboard>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;
