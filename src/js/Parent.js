var React = require('react');
var Child = require('./Child.js');

var quiz = {
    questions: [
        {
            question: 'Which animal has wings?',
            choices: ['Dog', 'firstanswer', 'secondanswer', 'Cat'],
            answerIndex: 1
        },
        {
            question: 'Which superhero can fly?',
            choices: ['Antman', 'firstanswer', 'secondanswer', 'Spiderman'],
            answerIndex: 2
        }],
    progress: 0
}


/*
dispatch 
getState
subscribe
*/

var Parent = React.createClass({
	getInitialState: function(){
		return {
		  progress: 0
		};
	},

	answerCheck: function(index){
		if (index === quiz["questions"][this.state.progress]["answerIndex"] && this.state.progress <= quiz["questions"].length - 1 ){
				this.setState({
					progress: this.state.progress + 1
				});
		}
	},
    render: function () {
    	if (this.state.progress > quiz["questions"].length - 1 ){
    		return (<div>Thanks for playing!</div>)
    	} else {
    		return ( 
        		<div>
        			Question {this.state.progress + 1}.
        			<Child questions={quiz["questions"][this.state.progress]} handleInput={this.answerCheck} />
            	</div>
        	)
    	}
    }
});


//export Parent from the file
module.exports = Parent;
