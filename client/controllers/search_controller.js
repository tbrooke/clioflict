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
        var data = {params: {searchTerm: $scope.searchTerm}};
        //searchDB = {};

        $.each($scope.vm.accounts, function(i, account) {
          account.isLoading = true;
        });

        $.each($scope.vm.accounts, function(i, account) {
          Streamable.get('/query/' + account.id, data, {
            onData: function(data) {
              var results = JSON.parse(data.results);
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
        });

      };
    }
  ]);
