angular.module('mainApp')
    .controller('VeiculoFormCtrl', function ($scope, VeiculoService, veiculo,$location, dialogsResposta, Upload) {

        function init(){
            if(veiculo!=null){
                $scope.veiculo=veiculo.data;
            }
        }

        function limparCampos(form, veiculo){
            if(!veiculo.id){
                $scope.veiculo = {};
            }
            form.$setPristine();
          }

        function converterImagem(imagem, veiculo){
           return Upload.base64DataUrl(imagem)
            .then(function (value){
                console.log(value)
                return value;     
            }, function(error){
                console.log(error);
                return error;
                
            }
        )            
        }

        $scope.converter = function(){
            alert("OK");
            return foto;
            var foto = Upload.base64DataUrl($scope.picFile)
            .then(function (value){
                console.log(value)
                return value;     
            }, function(error){
                console.log(error);
                return error;
                
            }
        )         
            
        }

        $scope.salvar = function (form, veiculo, imagem) {

       
              converterImagem(imagem).then(function(foto){
                  veiculo.foto = foto;
                  console.log("VEICULO->>>.>>>>>> "+veiculo);
                  alert("Salvando: " + veiculo.foto);
              });               
           

           
            /*VeiculoService.salvar(veiculo)            
                .then(function (response) {
                        var retorno = response.data;
                        if(veiculo.id){
                            $location.path('/veiculo');
                        }else{                           
                            limparCampos(form,veiculo);
                        }

                        dialogsResposta.confirm('Confirmação',retorno.mensagem);
                       
                    }, function (error) {

                        if(error.data.mensagem)  {
                            alert(error.data.mensagem);
                        }
                        console.log(error);
                    });*/
        };       
        init();
    });
    