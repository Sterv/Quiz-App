var ANSWER = 'ANSWER';

var reducer = function(prevState, action){
	
	switch (action.type) {
		case ANSWER: 

		var newProgress = prevState.progress;

		if(prevState.questions[newProgress].answerIndex === action.index) {
			newProgress++;
		}
		return {
			questions: prevState.questions,
			progress: newProgress
		}
	}
}

var actionCreator = function(index){

	var actionObject = {
		type: ANSWER,
		index: index
	}
	
	return actionObject;
}
