(function(){
	var app = angular.module('rating', []);

	app.directive('ratingCards', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/rating-cards.html',
			controller: function($scope,$http){
				$http.get('data/rating.json').then(function(response){
					$scope.rating = response.data;
				});
			},
			controllerAs: 'peopleCtrl'
		};
	});
})();