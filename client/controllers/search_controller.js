clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];
      $scope.hasSearched = false;


      $.get('/accounts', function(data) {
          var accounts = data.accounts;

          $scope.$apply(function() {
            $scope.vm.accounts = accounts;
          });
        });

      $scope.search = function() {
        $scope.hasSearched = true;
        var searchData = {params: {searchTerm: $scope.searchTerm}};
        //searchDB = {};

        $.each($scope.vm.accounts, function(i, account) {
          account.isLoading = true;
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
              account.contacts = results.contacts;
              account.isLoading = false;
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
