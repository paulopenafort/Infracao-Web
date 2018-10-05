angular.module('mainApp')
            .controller('MunicipioFormCtrl', function ($scope, MunicipioService, municipio) {


                console.log("municipio" +municipio);
                function init() {
                    if (municipio!=null) {
                        $scope.municipio = municipio.data;
                        }
                }        
    
                function limparCampos(form,municipio) {
                    if (!municipio.id) {
                        $scope.municipio = {};
                    }
                    form.$setPristine();
                }    

             
            $scope.salvar = function(form, municipio) {
                if (form.$valid) {
                    MunicipioService.salvarOuAtualizar(municipio).then(
                        function (response) {
                            limparCampos(form,municipio);
                            alert(response.data.mensagem);
                    }, function (error) {
                        if (error.data.mensagem) {
                            alert(error.data.mensagem);
                       }  
                    }); 
                };  
            }    
        init();             
});