angular.module("mainApp").controller('MunicipioCtrl', function($scope, MunicipioService, dialogs, $sce){
    $scope.isSelected = false;

    function listar(){
        MunicipioService.listar().then(
            function (response){
                $scope.municipios = response.data;
            }, function(error){
                console.log(error);
            });
    }

    function removerDefinitivo(municipio) {
        console.log(municipio);
        console.log(municipio.id);
        MunicipioService.remover(municipio.id)
            .then(
                function (response) {
                    var retorno = response.data;
                    listar();
                    //$route.reload();
                    alert(retorno.mensagem);
                }, function (error) {
                    console.log(error);
                });

    }

    $scope.removerMunicipio = function (municipio) {
        console.log("entrou na função remover");
        var dlg =  dialogs.confirm('Confirmação','Deseja realmente remover o municipio?');                               

        dlg.result.then(function(){
             removerDefinitivo(municipio);
        });

    };

    function removerMunicipioDefinitivo(municipio){
        var selecionados = municipio.filter(function (municipio) {
            return municipio.selected;
        }).map(function (municipio) {
            return municipio.id;
        });

        MunicipioService.deletarMunicipios(selecionados).then(
            function (response) {
            var retorno = response.data;
            listar();
            $scope.isSelected = false;
            alert(retorno.mensagem);
        }, function (error) {
            console.log(error);
        });
    }

    $scope.atualizarMunicipio = function (municipios) {
        var selecionados = veiculos.filter(function (municipio) {
            return municipio.selected;
        })

        if (selecionados.length > 1) {
            alert("Só é possível atualizar um municipio de veículo por vez!");
        }

        if (selecionados.length <= 0) {
            alert("Selecione um municipio para atualização");
        }

    };


    $scope.selecionar = function () {
        $scope.isSelected = $scope.municipios.some(function (municipio) {
            return municipio.selected;
        })
    }


    /*$scope.isSelected = function(veiculos){
        console.log('Entrou');
        var vs = veiculos.some(function (veiculo){
            return veiculo.selected;
        })
        console.log(vs);
    }*/

    $scope.ordenarPor=function(campo){            
        $scope.criterio = campo;
        $scope.direcao = !$scope.direcao;
    }

    $scope.htmlPopover = $sce.trustAsHtml('<img src="view/popoverTeste/imagens/noruega.jpg" class="img-thumbnail">');

    listar();
});