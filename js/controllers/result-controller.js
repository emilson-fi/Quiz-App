(function(){
	
	angular.module('turtleFacts')
	.controller('ResultController', ResultController);

	ResultController.$inject = ['DataService'];
	function ResultController(DataService){
		var resultCtrl = this;



		DataService.getQuestions().then(function(data){
			resultCtrl.questions =  data;

		});

		resultCtrl.markQuiz = function(){
			for(var i = 0; i < resultCtrl.questions.length - 1; i++){
				if (resultCtrl.questions[i].selected === resultCtrl.correctAnswers.answers[i]) {
					console.log("correct");
					resultCtrl.questions[i].correct = true;
				}
			}
			console.log(DataService.questions)
		}
	

	}
})();