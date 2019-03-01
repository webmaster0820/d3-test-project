(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('gameTechPreSurveySchoolResultsCtrl', function($scope, $http, gameTechSchoolData) {
    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.schools = {};

    $scope.get_school_data = function() {        
      console.log('fetching info');
      gameTechSchoolData.pre_survey().then(function(data) {
        console.log(data);
        $scope.schools = data;
      });
    };

    $scope.get_school_data();
	});
 
}());