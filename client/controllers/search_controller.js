clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];
      $scope.vm.isLoading = false;
      $scope.gridData = [];
      $scope.vm.gridOptions = {
         data: 'gridData',
         columnDefs: [
           {field: 'first_name', displayName: 'First Name'},
           {field: 'last_name', displayName: 'Last Name'},
         ]
      };


      $.get('/accounts', function(data) {
          var accounts = data.accounts;

          $scope.$apply(function() {
            $scope.vm.accounts = accounts;
          });
        });

      $scope.search = function() {
        $scope.hasSearched = true;
        $scope.vm.isLoading = true;
        var searchData = {params: {searchTerm: $scope.searchTerm}};
        $scope.gridData = [];
        var totalAccountsCompleted = 0;

        $.each($scope.vm.accounts, function(i, account) {
          account.isLoading = true;
          account.contacts = [];
        });

        Streamable.get('/query', searchData, {
          onData: function(data) {
            var results = JSON.parse(data.results);
            var accountId = data.account['_id'];
            var account = {};
            $.each($scope.vm.accounts, function(i, acc) {
              if (acc.id == accountId) {
                account = acc;
              }
            });

            $scope.$apply(function () {
              $.extend(account, data.account);
              angular.forEach(results.contacts, function(contact) {
                $scope.gridData.push(contact);
              });
              account.isLoading = false;

              $scope.vm.isLoading = false;
            });
          },
          onError: function(err) {
            // assume error happened b/c user is required to reauthenticate
            window.location = '/login';
          }
        });

      };
    }
  ]);
