angular.module('mainApp').controller('ConfirmDialogCtrl', function ($uibModalInstance,$scope, config) {
  
    $scope.config = config;

  $scope.ok = function () {
    $uibModalInstance.close('OK');
  };

  $scope.validar = function () {
    $uibModalInstance.close('Validar');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});