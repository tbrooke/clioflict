var dateOfBirth = function(contact) {
  var date;

  angular.forEach(contact.custom_field_values, function(custom_data) {
    if (custom_data.custom_field && custom_data.custom_field.name === 'Date of Birth') {
      date = custom_data.value;
    }
  });

  return date;
}

/*var contactURL = function(contact) {
  var typeUrl;
  if (contact.type === 'Company') {
    typeUrl = 'companies/';
  } else {
    typeUrl = 'people/';
  }
  return typeUrl + contact.id;
};*/

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
           {field: 'name', displayName: 'Company Name'},
           {field: 'date_of_birth', displayName: 'Date of Birth'},
         ],
         afterSelectionChange: function(rowItem, state) {
           $scope.toggleContact(rowItem.entity, rowItem.entity.account_name);
         }
         //rowTemplate:'<div style="height: 100%"><a ng-href="https://app.goclio.com/{{row.getProperty(\'contact_url\')}}" target="_blank"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
         //              '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
         //              '<div ng-cell></div>' +
         //              '</div></a></div>'
      };

      $.get('/accounts', function(data) {
          var accounts = data.accounts;

          $scope.$apply(function() {
            $scope.vm.accounts = accounts;
            $scope.vm.totalAccounts = accounts.length;
          });
        });

      $scope.toggleContact = function(contact, accountName) {
        var foundIndex;
        $.each($scope.vm.selectedContacts, function(i, selectedContact) {
          if (selectedContact.id === contact.id) {
            foundIndex = i;
          }
        });

        if (foundIndex !== undefined) {
          $scope.vm.selectedContacts.splice(foundIndex, 1);
        } else {
          contact.accountName = accountName;
          $scope.vm.selectedContacts.push(contact);
        }
      };

      $scope.search = function() {
        $scope.hasSearched = true;
        $scope.vm.isLoading = true;
        var searchData = {params: {searchTerm: $scope.searchTerm}};
        $scope.gridData = [];
        $scope.vm.selectedContacts = [];
        $scope.vm.accountsSearched = 0;
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
              angular.forEach(results.contacts, function(contact) {
                contact.account_name = account.name;
                contact.date_of_birth = dateOfBirth(contact);
                //contact.contact_url = contactURL(contact);

                $scope.gridData.push(contact);
              });
              account.isLoading = false;

              $scope.vm.isLoading = false;
              $scope.vm.accountsSearched++;
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
