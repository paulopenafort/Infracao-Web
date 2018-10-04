angular.module("mainApp").factory("dialogs",function($uibModal){   

    function confirm(titulo, texto) {

        return $uibModal.open({                
            animation: true,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'view/modal/modal-confirmacao.html',
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