(function(){
	"use strict";

	angular.module('turtleFacts')
	.service('DataService', DataService);

	DataService.$inject = ['$http'];
	function DataService($http){
		var service = this;
		service.turtleData
		service.getData = function(){
			return $http.get("data/turtle-data.json").then(function(response){
				service.turtleData = response.data
				return response.data;
			});
			
		};

		service.getQuestions = function(){
			return $http.get("data/quiz-questions.json").then(function(response){
				service.questions = response.data
				return response.data;
			});
			
		}

		service.getCorrectAnswers = function(){
			return $http.get("data/correct-answers.json").then(function(response){
				return response.data;
			});
			
		}

		service.updateProgressBar = function(increment, length ){
			
		}

		

	}
})();