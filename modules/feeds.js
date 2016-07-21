(function(){
	var app = angular.module('feeds',[]);
	
	app.controller('feedsController',function($scope,$http){
		$http.get('data/feeds.json').success(function(data){
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