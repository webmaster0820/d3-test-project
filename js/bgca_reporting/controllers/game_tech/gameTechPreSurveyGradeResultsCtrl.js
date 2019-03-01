(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('gameTechPreSurveyGradeResultsCtrl', function($scope, $http, gameTechGradeData) {
    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.grades = {};

    $scope.get_grade_data = function() {
        
      console.log('fetching info');
      gameTechGradeData.pre_survey().then(function(data) {
        $scope.grades = data;
      });
    };

    $scope.get_grade_data();
  });
 
}());