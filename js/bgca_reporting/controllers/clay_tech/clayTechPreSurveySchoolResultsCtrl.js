(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('clayTechPreSurveySchoolResultsCtrl', function($scope, $http, clayTechSchoolData) {
    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

    $scope.schools = {};

    $scope.get_school_data = function() {        
      console.log('fetching info');
      clayTechSchoolData.pre_survey().then(function(data) {
        console.log(data);
        $scope.schools = data;
      });
    };

    $scope.get_school_data();
	});
 
}());