(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('gameTechSchoolProgressCtrl', function($scope, $http, gameTechGradeData, gameTechSchoolData, chartData) {

    $scope.Math = window.Math;

    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.pre_grades = {};
    $scope.post_grades = {};

    $scope.pre_schools = {};
    $scope.post_schools = {};

    $scope.get_data = function() {
        
      console.log('fetching info');
      gameTechGradeData.pre_survey().then(function(data) {        
        $scope.pre_grades = data;
        console.log($scope.pre_grades);
      });
      gameTechGradeData.post_survey().then(function(data) {        
        $scope.post_grades = data;
        console.log($scope.post_grades);
      });

      gameTechSchoolData.pre_survey().then(function(data) {
        $scope.pre_schools = data;
        console.log($scope.pre_schools);
      });
      gameTechSchoolData.post_survey().then(function(data) {
        $scope.post_schools = data;
        console.log($scope.post_schools);
      });
    };

    $scope.get_data();
    
	});
 
}());