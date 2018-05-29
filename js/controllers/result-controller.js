(function(){
	
	angular.module('turtleFacts')
	.controller('ResultController', ResultController);

	ResultController.$inject = ['DataService', 'resultItems', 'correctAnswers'];
	function ResultController(DataService, resultItems, correctAnswers){
		var resultCtrl = this;

		resultCtrl.resultItems = resultItems;
		resultCtrl.correctAnswers = correctAnswers;
		

		console.log(resultItems);
		resultCtrl.markQuiz = function(){

			for(var i = 0; i < resultCtrl.resultItems.length - 1; i++){
				if (resultCtrl.resultItems[i].selected === resultCtrl.correctAnswers.correct_answers[i]) {
					resultCtrl.resultItems[i].correct = true;
				}
			}
		}

	}
})();