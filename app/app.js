var myNinjaApp = angular.module('myNinjaApp', [
	'ui.router'
])//Name of app, dependencies

myNinjaApp.controller('NinjaController', function($scope) {

	$scope.removeNinja = function(ninja) {
		console.log(ninja);
		var removeNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removeNinja, 1);
	}

	$scope.message = "hey all";

	$scope.ninjas = [
		{
			name: "Yoshi",
			belt: "green",
			rate: 50,
			available: true
		},
		{
			name: "Crystal",
			belt: "Yellow",
			rate: 30,
			available: true
		},
		{
			name: "Ryu",
			belt: "orange",
			rate: 10,
			available: false
		},
		{
			name: "Shaun",
			belt: "black",
			rate: 1000,
			available: true 
		}
	];
})
