angular.module('mainApp')
            .controller('InfracaoFormCtrl', function ($scope, InfracaoService, infracao) {
            console.log("infracao" +infracao);
            function init() {
                if (infracao!=null) {
                    $scope.infracao = infracao.data;
                    }
            }    

            function limparCampos(form,infracao) {
                if (!infracao.id) {
                    $scope.infracao = {};
                }
                form.$setPristine();
            }

             
            $scope.salvar = function(form,infracao) {

                if (form.$valid) {

                   InfracaoService.salvarOuAtualizar(infracao)
                    .then(
                    function (response) {
                        limparCampos(form,infracao);
                        alert(response.data.mensagem);
                        
                    }, function (error) {
                       if (error.data.mensagem) {
                            alert(error.data.mensagem);
                       }                  
                   
                    }); 
                }

                 
            };

            init();
});