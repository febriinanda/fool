var app = angular.module('foolApp',[]);

app.controller('listController',function listController($scope, $http){
	$http.get('http://localhost:3000/religions').then(function(response){
		$scope.phones = response.data;
	});

	$http.get('http://localhost:3000/genders').then(function(response){
		$scope.genders = response.data;
	});
	
});