(function(){
	angular.module('turtleFacts')
	.controller('listController', listController);

	listController.$inject = ['DataService'];
	function listController(DataService){
		var list = this;
		
		list.search = "";
		
		DataService.getData().then(function(data){
			list.turtleData = data
		});
		

		list.activeTurtle = {};
		list.currentActiveTurtle = function(turtle){
			list.activeTurtle = turtle;
		}
		
		
	}
	
})();