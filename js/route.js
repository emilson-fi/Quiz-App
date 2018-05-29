(function(){
	"use strict";

	angular.module('turtleFacts')
		.config(config);
 	 
		config.$inject = ['$stateProvider','$urlRouterProvider'];
		function config($stateProvider, $urlRouterProvider){

			$urlRouterProvider.otherwise('/home');

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'templates/home-template.html'
				})
				.state('quiz', {
					url:'/quiz',
					templateUrl: 'templates/quiz-template.html',
					controller: 'QuizController',
					controllerAs: 'quizCtrl'
				})
				.state('result', {
					url:'/result',
					templateUrl: 'templates/result-template.html',
					controller: 'ResultController',
					controllerAs: 'resultCtrl',
					resolve: {
						resultItems: ['DataService', function(DataService){
							return DataService.getQuestions();
						}],

						correctAnswers: ['DataService', function(DataService){
							return DataService.getCorrectAnswers();
						}]
					}
				});
			

		}
	

})();
