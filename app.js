(function(){
	var app = angular.module('foolApp',['employees','form', 'feeds', 'rating']);

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

	
})();