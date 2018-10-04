angular.module('mainApp')
    .controller('InfracaoCtrl',['$scope','InfracaoService','dialogs', function ($scope, InfracaoService,dialogs) {


        function listar() {
            InfracaoService.listar().then(
                function (response) {
                   $scope.infracoes = response.data;
                }, function (error) {
                    console.log(error);
                });
        }

        function removerDefinitivo(infracao) {
            InfracaoService.remover(infracao.id)
                .then(
                function (response) {
                    var retorno = response.data;
                    listar();
                    alert(retorno.mensagem);
                }, function (error) {
                    console.log(error);
                });
        }

        $scope.remover = function (infracao) {
           var dlg =  dialogs.confirm('Confirmação','Deseja realmente remover a infracao?');
                        

           dlg.result.then(function(){
                removerDefinitivo(infracao);
           });
       };

       listar();
    }]);