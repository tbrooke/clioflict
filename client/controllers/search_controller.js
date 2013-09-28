function dateOfBirth(contact) {
  var date;

  angular.forEach(contact.custom_field_values, function(custom_data) {
    if (custom_data.custom_field && custom_data.custom_field.name === 'Date of Birth') {
      date = custom_data.value;
    }
  });

  return date;
}

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
           {field: 'account_name', displayName: 'Account Name'},
           {field: 'first_name', displayName: 'First Name'},
           {field: 'last_name', displayName: 'Last Name'},
           {field: 'date_of_birth', displayName: 'Date of Birth'},
           {field: 'name', displayName: 'Company Name'},
         ]
      };
      // first_name
      // last_name
      // clio account name
      // company_name
      // date_of_birth
      // custom_data.custom_field === 'Date of Birth'


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

            console.log(results);

            $scope.$apply(function () {
              angular.forEach(results.contacts, function(contact) {
                contact.account_name = account.name;
                contact.date_of_birth = dateOfBirth(contact);

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
