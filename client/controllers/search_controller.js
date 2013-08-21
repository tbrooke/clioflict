clioClientSearch.controller('SearchController',
  ['$scope',
    function($scope) {

      $scope.search = function() {
        var data = {searchTerm: $scope.searchTerm};
        $.ajax('/query', {
          data: data, 
          success: function(results,status,jqXHR) {
            console.log(results, status, jqXHR);
          }
        });
      };
    }
  ]);
