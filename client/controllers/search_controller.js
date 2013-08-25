clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];

      $scope.search = function() {
        var data = {params: {searchTerm: $scope.searchTerm}};
        //searchDB = {};
        $scope.vm.accounts = [];

        Streamable.get('/query', data, {
          onData: onDataHandler,
          onError: function(err) { console.log(err); }
        });

        function onDataHandler(data) {
          if (data.accounts) {
            return accountsHandler(data);
          } else {
            return accountHandler(data);
          }
        }

        function accountsHandler(data) {
          var accounts = data.accounts;
          $.each(accounts, function(i, account) {
            account.isLoading = true;
          });

          $scope.$apply(function() {
            $scope.vm.accounts = accounts;
          });
        }

        function accountHandler(data) {
          var account = data.account;
          var results = JSON.parse(data.results);
          account.contacts = results.contacts;
          $scope.$apply(function () {
            var found = false;
            $.each($scope.vm.accounts, function(i, acc) {
              if (acc['_id'] === account['_id']) {
                found = true;
                acc.contacts = account.contacts;
                acc.isLoading = false;
              }
            });
            if (found === false) { $scope.vm.accounts.push(account); }
          });
        }
      };
    }
  ]);
