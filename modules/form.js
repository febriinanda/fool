(function(){
	var app = angular.module('form', []);

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

		function getMonth(value){
		var res = parseInt(value)+1;
		return res;
	}
	});

	app.directive('searchInput', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/search-input.html'
		}
	});

	app.directive('religionsInput', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/religions-input.html',
			controller: function($scope,$http){
				$http.get('http://localhost:3000/api/religions').then(function(response){
					$scope.religions = response.data;
				});
			},
			controllerAs: 'religionsCtrl'
		};
	});

	app.directive('gendersInput', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/genders-input.html',
			controller: function($scope,$http){
				$http.get('http://localhost:3000/api/genders').then(function(response){
					$scope.genders = response.data;
				});
			},
			controllerAs: 'gendersCtrl'
		};
	});


})();