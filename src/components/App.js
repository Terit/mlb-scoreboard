import React from 'react';

import Scoreboard from './Scoreboard.js';
import Inning from './Inning.js';
import Score from './Score.js';

class App extends React.Component {
  renderInnings() {
    return (
      <div className="scores">
        <Inning>
          <Score score="10" />
          <Score score="3" />
        </Inning>
        <Inning>
          <Score score="0" />
          <Score score="1" />
        </Inning>
        <Inning>
          <Score score="0" />
          <Score score="1" />
        </Inning>
        <Inning>
          <Score score="0" />
          <Score score="1" />
        </Inning>
        <Inning>
          <Score score="0" />
          <Score score="1" />
        </Inning>
        <Inning>
          <Score score="0" />
          <Score score="1" />
        </Inning>
      </div>
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
          {this.renderInnings()}
        </Scoreboard>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;
