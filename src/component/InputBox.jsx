var InputForm = require('./InputForm.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

var InputBox = React.createClass({
  getInitialState: function() {
    //this is not currently used, but you could display donations in real time
    //by updating the state of the donation data when the form is submitted,
    //then poll the server for new donations.
    return {data: []};
  },
  render: function() {
    return (
      <div className="inputBox">
        {/* perhaps list new donations here or below the submit box */}
        <InputForm action={this.props.action} />
      </div>
    );
  }
});

ReactDOM.render(
  <InputBox action="{window.action}}" />,
  document.getElementById('content')
);

module.exports = InputBox;