angular.module("mainApp").factory("MunicipioService", function($http,constants){
    var BASE_URL = constants.BASE_URL + "/municipio";

    function listar(){
        return $http.get(BASE_URL);
    }

    function remover(id){
        return $http.delete(BASE_URL + '/' + id);
    }

    function buscarPorId(id){
        return $http.get(BASE_URL + '/' + id);
    }

    function salvar(municipio){
        return $http.post(BASE_URL,municipio);
    }

    function atualizar(municipio){
      return $http.put(BASE_URL + '/' + municipio.id, municipio);
    }

    function salvarOuAtualizar(municipio) {
        if (municipio.id) {
            return atualizar(municipio);
        } else {
            return salvar(municipio);
        }
    }

    return{
        listar: listar,
        remover: remover,
        salvar: salvar,
        atualizar: atualizar,
        buscarPorId: buscarPorId,
        salvarOuAtualizar: salvarOuAtualizar
    }
})