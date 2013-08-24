clioClientSearch.controller('SearchController',
  ['$scope','$templateCache','searchDB',
    function($scope, $templateCache, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];

      $scope.search = function() {
        var data = {searchTerm: $scope.searchTerm};
        searchDB = {};
        $scope.vm.accounts = [];

        $.ajax('/query', {
          data: data, 
          success: function(response,status,jqXHR) {
            var account = response.account;
            var results = JSON.parse(response.results);
            $scope.vm.accounts.push(account);
            searchDB[account['_id']] = {account: account, results: results};

            console.log(response);
          }
        });
      };
    }
  ]);
