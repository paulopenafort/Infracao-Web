angular.module("mainApp").controller('MunicipioCtrl', function($scope, MunicipioService){

    function listar(){
        MunicipioService.listar().then(
            function (response){
                $scope.municipios = response.data;
            }, function(error){
                console.log(error);
            });
    }

    $scope.remover = function (municipio) {
        MunicipioService.remover(municipio.id).then(
            function (response) {
                var retorno = response.data;
                listar();
                alert(retorno.msg);
            }, function (error) {
                console.log(error);
            });

    };

    listar();
});