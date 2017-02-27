/***********************************
	BENIS TAMBE MEAN BELT EXAM OPTION F
	will.jenifer@yahoo.com
************************************/

(function(){

angular.module('myApp', ['ngRoute']).config(config)

	function config($routeProvider){ $routeProvider
		.when('/index', {
			templateUrl: '/partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html'
		})
		.when('/createPoll', {
			templateUrl: '/partials/newPoll.html'
		})
		.when('/vote/:id', {
			templateUrl: '/partials/vote.html'
		})
		.otherwise({
			redirectTo: '/index'
		})

	}
})()
