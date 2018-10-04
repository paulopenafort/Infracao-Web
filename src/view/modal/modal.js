angular.module('mainApp').controller('ModalDemoCtrl', function ($uibModal, $scope, dialogs) {

   $scope.open = function () {

     var dlg = dialogs.confirm('Mensagem','Deseja excluir alguma coisa?')

     dlg.result.then(function(result){
        alert("Removendo a infracao");    
     }, function() {
        alert("Cancelou");    
      });
  };

});


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


angular.module("mainApp").factory("dialogs",function($uibModal){

    

    function confirm(titulo, texto) {

        return $uibModal.open({                
            animation: true,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'view/modal/modal.html',
            controller: 'ConfirmDialogCtrl',
            size: 'sm',
            resolve: {
                config: {
                    titulo: titulo,
                    texto: texto ,
                    labelBtnOk: 'Sim',
                    labelCancel: 'Não'
                }
                
            }
        });
    }

  return {
      confirm: confirm
   };

});


