clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];
      $scope.vm.isLoading = false;
      $scope.gridData = [];
      $scope.sampleData = [
        {firstName: 'Adam', lastName: 'Ferguson'},
        {firstName: 'Tom', lastName: 'Brooke'}
      ];
      $scope.vm.gridOptions = {
         data: 'gridData'
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
        $scope.contactStatus = [{id: 1, item: 'All'},
                                {id: 2, item: 'Open'},
                                {id: 3, item: 'Pending'},
                                {id: 4, item: 'Closed'}];
        var searchData = {params: {searchTerm: $scope.searchTerm + "matters_status=" + contactStatus}};
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
              //account.contacts = results.contacts;
              angular.forEach(results.contacts, function(contact) {
                var data = {
                  firstName: contact.first_name,
                  lastName: contact.last_name
                };

                $scope.gridData.push(data);
              });
              account.isLoading = false;

              totalAccountsCompleted++;
              if (totalAccountsCompleted === $scope.vm.accounts.length) {
                $scope.vm.isLoading = false;
              }
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
