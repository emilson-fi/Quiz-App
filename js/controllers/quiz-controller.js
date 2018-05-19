(function(){
	"use strict";

	angular.module('turtleFacts')
	.controller('QuizController', QuizController);

	QuizController.$inject = ['DataService'];
	function QuizController(DataService){
		var quizCtrl = this;


		DataService.getQuestions().then(function(data){
			quizCtrl.questions =  data;
		});

		quizCtrl.activeQuestion = 0;

		quizCtrl.getSelected = function(index){
			quizCtrl.questions[quizCtrl.activeQuestion].selected = index;
		}


		quizCtrl.nextQuestion = function(){
			var length = quizCtrl.questions.length -1 ;
			/*quizCtrl.questionLength = quizCtrl.questions.length -1;*/
			if(quizCtrl.questions[quizCtrl.activeQuestion].selected == null){
				alert('Please select an answer!');
			}else if (quizCtrl.activeQuestion < length ) {
				quizCtrl.activeQuestion++;
			}else{
				quizCtrl.lastQuestion = true;
			}
		}

	}

	

})();