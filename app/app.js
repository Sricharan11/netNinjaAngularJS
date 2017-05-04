var myNinjaApp = angular.module('myNinjaApp', [
	'ui.router',
	'ngRoute',
	'ngAnimate'
])//Name of app, dependencies

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'NinjaController'
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactController'
		})
		.when('/contact-success', {
			templateUrl: 'contact-success.html',
			controller: 'ContactController'
		})
		.when('/directory', {
			templateUrl: 'directory.html',
			controller: 'NinjaController'
		}).otherwise({
			redirectTo: '/home'
		})
	
	$locationProvider.html5Mode(true);
	//Cleans up URL without #!
}]);

myNinjaApp.directive('randomNinja', [function() {

	return {
		restrict: 'E',
		scope: {
			ninjas: '=',
			title: '=' //attribute name inside of directive, not the name of object
		},
		templateUrl: 'random.html', 
		controller: function($scope) {
			$scope.random = Math.floor(Math.random() * 4);
		},
		transclude: true, //Include any other html inside of directive
		replace: true //Will replace the name of the element with the outer moter element inside of the html
	}
}])

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http) {

	$scope.removeNinja = function(ninja) {
		var removeNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removeNinja, 1);
	}

	$scope.addNinja = function() {
		$scope.ninjas.push({
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			available: true
		});

		$scope.newninja.name = "";
		$scope.newninja.belt = "";
		$scope.newninja.rate = "";
	}

	$scope.removeAll = function() {

		$scope.ninjas = [];
	}

	$http.get('ninja.json').then(function(res) {
		$scope.ninjas = res.data;
	})

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location) {

	$scope.sendMessage = function() {
		$location.path('contact-success');
		//Send people to a new url
	}
}])
