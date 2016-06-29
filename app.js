var app = angular.module('foolApp',[]);

app.controller('summaryController',function summaryController($scope, $http){
	$http.get('http://localhost:3000/api/religions/count/').then(function(response){
		$scope.religionsCount = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/genders/count/').then(function(response){
		$scope.gendersCount = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/peoples/count/').then(function(response){
		$scope.peoplesCount = response.data[0].count;
	});
	
});