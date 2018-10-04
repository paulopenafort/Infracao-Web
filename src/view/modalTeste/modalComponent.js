angular.module('mainApp').component('modalComponent', {
    templateUrl: 'view/modalTeste/modal-1.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: function () {
      var $ctrl = this;
  
      $ctrl.$onInit = function () {
        console.log("Inicou ");
        
        $ctrl.items = $ctrl.resolve.items;
        $ctrl.selected = {
          item: $ctrl.items[0]
        };
      };
  
      $ctrl.ok = function () {
        $ctrl.close({$value: $ctrl.selected.item});
      };
  
      $ctrl.cancel = function () {
        $ctrl.dismiss({$value: 'cancel'});
      };
    }
  });