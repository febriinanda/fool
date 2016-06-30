var app = angular.module('foolApp',[]);

app.controller('summaryController',function summaryController($scope, $http){
	$http.get('http://localhost:3000/api/religions/count/').then(function(response){
		$scope.religionsCount = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/genders/count/').then(function(response){
		$scope.gendersCount = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/people/count/').then(function(response){
		$scope.peopleCount = response.data[0].count;
	});
	
});

app.controller('formController',function formController($scope, $http){
	this.formData = {};
	this.state = 0;
	
	this.addData = function(value){
		console.log(this.formData,value);
		$http.post('http://localhost:3000/api/'+value,this.formData).then(function(response){
			console.log(response);
		});
		this.formData = {};
		this.state = 1;
	}
});

app.controller('religionsController', function religionsController($scope, $http){
	$http.get('http://localhost:3000/api/religions').then(function(response){
		$scope.religions = response.data;
	});
});

app.controller('gendersController', function gendersController($scope, $http){
	$http.get('http://localhost:3000/api/genders').then(function(response){
		$scope.genders = response.data;
	});
});