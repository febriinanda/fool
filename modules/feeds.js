(function(){
	var app = angular.module('feeds',[]);
	
	app.directive('feeds', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/feeds.html',
			controller: function($scope,$http){
				$http.get('http://localhost:3000/api/feeds').then(function(response){
					$scope.feeds = response.data;
				});
			},
			controllerAs: 'feedsCtrl'
		};
	});
})();