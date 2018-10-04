angular.module('mainApp').controller('MyCtrl', function ($scope, Upload, $timeout) {
    /*$scope.upload = function (dataUrl, name) {
        Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {
                file: Upload.dataUrltoBlob(dataUrl, name)
            },
        }).then(function (response) {
            $timeout(function () {
                $scope.result = response.data;
            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status
                + ': ' + response.data;
        }, function (evt) {
            $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        });
    }*/

    $scope.upload = function(files){
        Upload.base64DataUrl(files)
        .then(function (value){
             $scope.img=value;
            console.log($scope.img);
            
        }, function(error){
            console.log(error);
            
        }
    )};
});