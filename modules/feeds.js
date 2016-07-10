(function(){
	var app = angular.module('feeds',[]);
	
	app.controller('feedsController',function($scope,$http){
		$http.get('http://localhost:3000/api/feeds').success(function(data){
			$scope.feeds = data;
		});
	});

	app.directive('feeds', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/feeds.html',
		};
	});
})();