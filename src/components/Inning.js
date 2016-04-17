import React from 'react';

class Inning extends React.Component {
  render() {
    return (
      <div className="inning">
        {this.props.children}
      </div>
    );
  }
}

Inning.propTypes = {
  children: React.PropTypes.array
};

export default Inning;
