(function () {
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.input = "";
		$scope.message = "";
		$scope.onClick = function () {
			const items = $scope.input.split(",").filter((item) => {
				return item.trim() !== "";
			});

			const length = items.length;

			if (length === 0) {
				$scope.message = "Please enter data first";
			} else if (length <= 3) {
				$scope.message = "Enjoy!";
			} else if (length > 3) {
				$scope.message = "Too much!";
			}
		}
	}
	
})();
	