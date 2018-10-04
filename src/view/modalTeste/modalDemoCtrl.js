angular.module('mainApp').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
  
    $ctrl.animationsEnabled = true;
  
    $ctrl.open = function (size, parentSelector) {
      console.log("Here -1");
      
      //var parentElem = parentSelector ?  angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'view/modalTeste/modal-1.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        //appendTo: parentElem,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });
  
      modalInstance.result.then(
        function (selectedItem) {
          console.log(selectedItem);          
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: to aqui' + new Date());
      });
    };
  
    $ctrl.openComponentModal = function () {
      console.log("Here- 2");
      
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });
  
      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('modal-component dismissed at: ' + new Date());
      });
    };
  
    $ctrl.openMultipleModals = function () {
      $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title-bottom',
        ariaDescribedBy: 'modal-body-bottom',
        templateUrl: 'view/modalTeste/modal-2.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'bottom';  
          console.log("Here>>>>>>>>>>>>>");
        }
      });
  
      $uibModal.open({        
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title-top',
        ariaDescribedBy: 'modal-body-top',
        templateUrl: 'view/modalTeste/modal-2.html',
        size: 'sm',
        controller: function($scope) {
          $scope.name = 'top';  
          console.log("Here----------------------");
        }
      }
      );
    };
  
    $ctrl.toggleAnimation = function () {
      $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
  });