angular.module('mainApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
      item: $ctrl.items[0]
    };
  
    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected.item);
      console.log("Deu ok!");
      
    };
  
    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
  