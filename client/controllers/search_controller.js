clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];

      $scope.search = function() {
        var data = {searchTerm: $scope.searchTerm};
        //searchDB = {};
        $scope.vm.accounts = [];

        $.ajax('/query', {
          data: data, 
          success: function(response,status,jqXHR) {
            var account = response.account;
            var results = JSON.parse(response.results);
            account.contacts = results.contacts;
            $scope.$apply(function () {
              $scope.vm.accounts.push(account);
              console.log(account);
              //searchDB[account['_id']] = {account: account, results: results};
            });

          }
        });
      };
    }
  ]);
