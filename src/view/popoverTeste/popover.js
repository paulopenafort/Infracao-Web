angular.module('mainApp').controller('PopoverDemoCtrl', function ($scope, $sce) {
    $scope.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'view/popoverTeste/myPopoverTemplate.html',
      title: 'Title'
    };
  
    $scope.placement = {
      options: [
        'top',
        'top-left',
        'top-right',
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-top',
        'left-bottom',
        'right',
        'right-top',
        'right-bottom'
      ],
      selected: 'left'
    };
    
    $scope.htmlPopover = $sce.trustAsHtml('<img src="view/popoverTeste/imagens/noruega.jpg" class="img-thumbnail">');
  });