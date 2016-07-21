(function(){
	var app = angular.module('employee', []);
	
	app.directive('employeeLists', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/employee-lists.html',
			controller: function($scope,$http){
				$http.get('data/employee.json').then(function(response){
					$scope.people = response.data;
				});

				this.likeClick = function(val){
					console.log("Like",val);
				}

				this.editClick = function(val){
					console.log("Edit",val);
				}
			},
			controllerAs: 'peopleCtrl'
		};
	});
})();