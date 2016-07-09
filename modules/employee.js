(function(){
	var app = angular.module('employee', []);
	
	app.directive('employeeLists', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/employee-lists.html',
			controller: function($scope,$http){
				$http.get('http://localhost:3000/api/people').then(function(response){
					$scope.people = response.data;
				});
			},
			controllerAs: 'peopleCtrl'
		};
	});
})();