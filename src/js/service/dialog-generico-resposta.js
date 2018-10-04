angular.module("mainApp").factory("dialogsResposta",function($uibModal){   

    function confirm(titulo, texto) {

        return $uibModal.open({                
            animation: true,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'view/modal/modal-resposta.html',
            controller: 'RespostaDialogCtrl',
            size: 'sm',
            resolve: {
                config: {
                    titulo: titulo,
                    texto: texto ,
                    labelBtnOk: 'Ok',
                }
                
            }
        });
    }

  return {
      confirm: confirm
   };

});