(function () {
	'use strict';

	var app = angular.module('bgca_reporting');
	app.factory('gameTechGradeData', function($http) {
		return {
			pre_survey: function() {
				return $http.get('sample_data/grade/pre_grades.json').then(function(result) {
					return result.data;
				});
			},
			post_survey: function() {
				return $http.get('sample_data/grade/post_grades.json').then(function(result) {
					return result.data;
				});
			}
		}
	})
	.factory('gameTechSchoolData', function($http) {
		return {
			pre_survey: function() {
				return $http.get('sample_data/school/pre_schools.json').then(function(result) {
					return result.data;
				});
			},
			post_survey: function() {
				return $http.get('sample_data/school/post_schools.json').then(function(result) {
					return result.data;
				});
			}
		}
	})
	.factory('clayTechGradeData', function($http) {
		return {
			pre_survey: function() {
				return $http.get('sample_data/grade/grades.json').then(function(result) {
					return result.data;
				});
			},
			post_survey: function() {
				return $http.get('sample_data/grade/grades.json').then(function(result) {
					return result.data;
				});
			}
		}
	})
	.factory('clayTechSchoolData', function($http) {
		return {
			pre_survey: function() {
				return $http.get('sample_data/school/schools.json').then(function(result) {
					return result.data;
				});
			},
			post_survey: function() {
				return $http.get('sample_data/school/grades.json').then(function(result) {
					return result.data;
				});
			}
		}
	})
	.factory('chartData', function($http) {
		return {
			chart_options: function() {
				return $http.get('sample_data/chart_options.json').then(function(result) {
					return result.data;
				});
			},
			chart_type: function() {
				return $http.get('sample_data/chart_data.json').then(function(result) {
					return result.data;
				});
			}
		}
	});
 
}());