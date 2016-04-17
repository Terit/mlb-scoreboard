import React from 'react';

import Scoreboard from './Scoreboard.js';
import Inning from './Inning.js';
import Score from './Score.js';

class App extends React.Component {
  renderInning() {
    return (
      <Inning>
        <Score score="10" />
        <Score score="3" />
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
          {this.renderInning()}
        </Scoreboard>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;
