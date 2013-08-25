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
          onData: accountHandler,
          onError: function(err) { console.log(err); }
        })
        function accountHandler(data) {
          var account = data.account;
          var results = JSON.parse(data.results);
          account.contacts = results.contacts;
          $scope.$apply(function () {
            $scope.vm.accounts.push(account);
          });
        }
      };
    }
  ]);
