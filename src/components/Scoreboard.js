import React from 'react';

class Scoreboard extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="inning-labels">
          <label></label>
          <label>1</label>
          <label>2</label>
          <label>3</label>
          <label>4</label>
          <label>5</label>
          <label>6</label>
          <label>7</label>
          <label>8</label>
          <label>9</label>
        </div>
        <div className="scores">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Scoreboard.propTypes = {
//   children: React.PropTypes.func
// };

export default Scoreboard;
