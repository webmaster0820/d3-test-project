(function () {
  'use strict';

  var app = angular.module('bgca_reporting');
  app.controller('mainCtrl', function($scope, $http) {
    $scope.data = {};

    $scope.chart_options = {};
    $scope.chart_data = [];

  });
 
}());