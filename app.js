var app = angular.module('foolApp',[]);

app.controller('summaryController',function summaryController($scope, $http){
	$http.get('http://localhost:3000/api/religions/count/').then(function(response){
		$scope.religions = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/genders/count/').then(function(response){
		$scope.genders = response.data[0].count;
	});

	$http.get('http://localhost:3000/api/people/count/').then(function(response){
		$scope.people = response.data[0].count;
	});
	
});

app.controller('formController',function formController($scope, $http){
	this.formData = {};
	$scope.state = 0;

	var date = new Date();
	var now = date.getFullYear()+"-"+getMonth(date.getMonth())+"-"+date.getDate();
	
	this.addData = function(value){
		console.log(this.formData,value);
		this.formData.status = 1;
		this.formData.create_date = now;
		$http.post('http://localhost:3000/api/'+value,this.formData).then(function(response){
			console.log("data",response);
			console.log(response.data.affectedRows,$scope.state);
			this.formData = {};
			if((response.data.affectedRows) && ($scope.state == 0)){
				this.formData.id_people = response.data.insertId;
				this.formData.notes = "recently join us!";
				this.formData.status = 1;
				this.formData.create_date = now;
				$http.post('http://localhost:3000/api/feeds',this.formData).then(function(responseFeed){
					console.log("feeds",responseFeed);
					$scope.state = 1;
				});
			}
		});
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

app.controller('viewController', function viewController(){
	this.menu = "home";

	this.selectMenu = function(val){
		this.menu = val;
	}

	this.isSelected = function(val){
		return this.menu == val;
	}
});

app.controller('modalController', function modalController(){
	this.modal = {};

	this.openModal = function(val){
		this.modal = val;
	}

	this.isSelected = function(val){
		return this.modal == val;
	}
});

app.controller('peopleController', function peopleController($scope, $http){
	$http.get('http://localhost:3000/api/people').then(function(response){
		$scope.people = response.data;
	});
});

app.controller('feedsController', function feedsController($scope, $http){
	$http.get('http://localhost:3000/api/feeds').then(function(response){
		$scope.feeds = response.data;
	});
});

function getMonth(val){
	var res = parseInt(val)+1;
	return res;
}