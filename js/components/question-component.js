(function(){
	"use strict";

	angular.module('turtleFacts')
	.component('question',  {
			restrict: "E",
			templateUrl: "templates/question-component-template.html",	
			bindings :{
				questions: '<',
				active: '<',
				selected: '&'
			},
			controller: QuestionCtrl,
			controllerAs: 'questionCtrl',
		}); 

	function QuestionCtrl(){
		var questionCtrl = this;
		
	}
})();