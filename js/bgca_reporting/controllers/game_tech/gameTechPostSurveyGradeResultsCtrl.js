(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('gameTechPostSurveyGradeResultsCtrl', function($scope, $http, gameTechGradeData) {
    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.grades = {};

    $scope.get_school_data = function() {        
      console.log('fetching info');
      gameTechGradeData.post_survey().then(function(data) {
        console.log(data);
        $scope.grades = data;
      });
    };

    $scope.get_school_data();
	});
 
}());