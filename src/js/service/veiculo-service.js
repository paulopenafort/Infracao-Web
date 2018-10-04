angular.module("mainApp").factory("VeiculoService", function ($http, constants) {

    var BASE_URL = constants.BASE_URL + "/veiculo";


    function listar() {
        return $http.get(BASE_URL);
    }

    function remover(id) {
        console.log(id);

        return $http.delete(BASE_URL + '/' + id);
    }

    /*function apagarVeiculo(veiculo){
        console.log(veiculo)
        return veiculo;
    }*/

    function buscarPorId(id) {
        return  $http.get(BASE_URL+'/'+id);
    }

    function salvarOuAtualizar(veiculo) {
        if(veiculo.id){
            return atualizar(veiculo);
        }else{
            return salvar(veiculo);
        }
    }

    function salvar(veiculo){
        return $http.post(BASE_URL, veiculo);
    }

    function deletarVeiculos(ids) {
        return $http.delete(BASE_URL, { data: ids, headers: { 'Content-Type': 'application/json' } });
    }

    function atualizar(veiculo) {
        return $http.put(BASE_URL+'/'+veiculo.id, veiculo);
    }

    return {
        listar: listar,
        remover: remover,
        salvar: salvar,
        deletarVeiculos: deletarVeiculos,
        atualizar: atualizar,
        buscarPorId: buscarPorId,
        salvarOuAtualizar: salvarOuAtualizar,
    };

});
