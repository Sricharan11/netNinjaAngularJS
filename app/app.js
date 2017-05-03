var myNinjaApp = angular.module('myNinjaApp', [
	'ui.router',
	'ngRoute'
])//Name of app, dependencies

myNinjaApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'NinjaController'
		})
		.when('/directory', {
			templateUrl: 'directory.html',
			controller: 'NinjaController'
		}).otherwise({
			redirectTo: '/home'
		})
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
		}
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

	$http.get('ninja.json').then(function(res) {
		$scope.ninjas = res.data;
	})

}]);
