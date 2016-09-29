var myApp = angular.module("emailApp", []);

myApp.controller('EmailController', ['$scope', function($scope) {
  $scope.name;
  $scope.year;
  $scope.major;

  $scope.evalKeypress = function (e) {
    if (e.which == 13) {
      //document.getElementById("trigger").focus();
      $scope.create();
    } else {
      console.log("hey");
    }
  }

  $scope.isReady = function () {
    if ($scope.ready == true)
      return true;
  }

  $scope.create = function () {
    $scope.ready = true;
  }
}]);
