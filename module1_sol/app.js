(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {

  $scope.checkItems = function () {
    if ($scope.items == null || $scope.items === "") {
      $scope.message = 'Please enter data first';
    } else {
      var arrayOfItems = $scope.items.split(',');
      if (arrayOfItems.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  }
};

})();
