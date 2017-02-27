/***********************************
	BENIS TAMBE MEAN BELT EXAM OPTION F
	will.jenifer@yahoo.com
************************************/


(function(){

	angular.module('myApp').controller('voteController', votesCtrl)

	function votesCtrl(pollFactory, $location, $routeParams, $route){
		var self = this
		self.errors = []

		function getOne(surveyId){
			pollFactory.getOne(surveyId, function(factoryData){
				self.survey = factoryData.data.surveyInfo
			})
		}
		getOne($routeParams.id)


		self.increaseVote = function(optionId){
			self.errors = []
			pollFactory.increaseVote(optionId, function(factoryData){
				if(factoryData.data.status){
					getOne($routeParams.id)
				}else{
					self.errors = factoryData.data.errors
				}
			})
		}

	}
})()
