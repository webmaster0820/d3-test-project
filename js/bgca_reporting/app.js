(function () {
  'use strict';
  
  angular.module('bgca_reporting',['chieffancypants.loadingBar', 'ngAnimate', 'ngRoute', 'nvd3'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    }).
    when('/game-tech/pre-survey/grade-results/', {
        templateUrl: 'views/game_tech/grade_results.html',
        controller : 'gameTechPreSurveyGradeResultsCtrl'
    }).
    when('/game-tech/pre-survey/school-results', {
        templateUrl: 'views/game_tech/school_results.html',
        controller: 'gameTechPreSurveySchoolResultsCtrl'
    }).
    when('/game-tech/post-survey/grade-results/', {
        templateUrl: 'views/game_tech/grade_results.html',
        controller : 'gameTechPostSurveyGradeResultsCtrl'
    }).
    when('/game-tech/post-survey/school-results', {
        templateUrl: 'views/game_tech/school_results.html',
        controller: 'gameTechPostSurveySchoolResultsCtrl'
    }).
    when('/game-tech/school-progress-results/', {
        templateUrl: 'views/game_tech/school_progress.html',
        controller: 'gameTechSchoolProgressCtrl'
    }).
    when('/clay-tech/pre-survey/grade-results/', {
        templateUrl: 'views/waiting.html'
    }).
    when('/clay-tech/pre-survey/school-results', {
        templateUrl: 'views/waiting.html'
    }).
    when('/clay-tech/post-survey/grade-results/', {
        templateUrl: 'views/waiting.html'
    }).
    when('/clay-tech/post-survey/school-results', {
        templateUrl: 'views/waiting.html'
    }).
    when('/clay-tech/progress-results/', {
        templateUrl: 'views/waiting.html'
    }).
    when('/php/schoolAvg.php', {
        templateUrl: '/php/schoolAvg.php'
    }).
    otherwise({
        redirectTo: '/'
    });
  }])
  .config(function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = true;
  });
})();


