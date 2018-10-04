angular.module('mainApp').controller('RespostaDialogCtrl', function ($uibModalInstance,$scope, config) {
  
    $scope.config = config;

  $scope.ok = function () {
    $uibModalInstance.close('OK');
  };
});