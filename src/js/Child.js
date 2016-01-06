var React = require('react');

var Child = React.createClass({
  handleClick: function(index){
  		this.props.handleInput(index);
  },
  render: function(){
  	var question = this.props.questions["question"];
  	
  	var choices = this.props.questions["choices"].map(function(element, index){
  	 return (<div onClick={this.handleClick.bind(this, index)}> {element} </div>);
  	}, this);

    return (
      <div>
      	{question}
      	<form>
      	{choices}
      	</form>      	
      </div>
    )
  }
});

module.exports = Child;