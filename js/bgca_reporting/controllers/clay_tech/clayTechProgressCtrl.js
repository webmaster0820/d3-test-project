(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('clayTechProgressCtrl', function($scope, $http, clayTechGradeData, clayTechSchoolData, chartData) {

    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.pre_grades = {};
    $scope.post_grades = {};

    $scope.pre_school = {};
    $scope.post_school = {};

    $scope.get_data = function() {
        
      console.log('fetching info');
      clayTechGradeData.pre_survey().then(function(data) {
        $scope.pre_grades = data;
      });
      clayTechGradeData.post_survey().then(function(data) {
        $scope.pre_grades = data;
      });

      clayTechSchoolData.pre_survey().then(function(data) {
        $scope.pre_grades = data;
      });
      clayTechSchoolData.post_survey().then(function(data) {
        $scope.pre_grades = data;
      });
    };

    $scope.get_grade_data();
    
	});
 
}());