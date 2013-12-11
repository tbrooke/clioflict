// field name should be a regular expression to match the
// custom data field against
var customDataExtraction = function(fieldName, contact) {
  var customDataValue;

  angular.forEach(contact.custom_field_values, function(custom_data) {
    if (custom_data.custom_field && custom_data.custom_field.name.match(fieldName)) {
      customDataValue = custom_data.value;
    }
  });

  return customDataValue;
}

clioClientSearch.controller('SearchController',
  ['$scope','searchDB',
    function($scope, searchDB) {
      $scope.vm = {};
      $scope.vm.accounts = [];
      $scope.vm.isLoading = false;
      $scope.gridData = [];
      $scope.filterOptions = {
        filterText: ''
      };

      $scope.exportHeaders = ['id',
                              'account_name',
                              'first_name',
                              'last_name',
                              'middle_name',
                              'date_of_birth',
                              'phone_number',
                              'street',
                              'city',
                              'state',
                              'postal_code',
                              'organization'];

      $scope.vm.gridOptions = {
         data: 'gridData',
         enableColumnReordering: true,
         enableColumnResize: true,
         filterOptions: $scope.filterOptions,
         columnDefs: [
           {field: 'account_name', displayName: 'Account Name', width: 120},
           {field: 'first_name', displayName: 'First Name'},
           {field: 'last_name', displayName: 'Last Name'},
           {field: 'middle_name', displayName: 'Middle Name'},
           {field: 'date_of_birth', displayName: 'Date of Birth'},
           {field: 'phone_number', displayName: 'Phone Number'},
           {field: 'street', displayName: 'Street'},
           {field: 'city', displayName: 'City'},
           {field: 'state', displayName: 'State'},
           {field: 'postal_code', displayName: 'Zip Code'},
           {field: 'organization', displayName: 'Organization'},
         ],
         afterSelectionChange: function(rowItem, state) {
           rowItem.entity.rowIndex = rowItem.rowIndex;
           $scope.toggleContact(rowItem.entity, rowItem.entity.account_name);
         },
         //showFilter: true
      };

      $.get('/accounts', function(data) {
          var accounts = data.accounts;

          $scope.$apply(function() {
            $scope.vm.accounts = accounts;
            $scope.vm.totalAccounts = accounts.length;
          });
        });

      $scope.toggleContact = function(contact, accountName, toggleGrid) {
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
        if (toggleGrid) {
          $scope.vm.gridOptions.selectRow(contact.rowIndex);
        }
      };

      $scope.exportContacts = function() {
        var results = [];
        if ($scope.vm.gridOptions.ngGrid) {
          angular.forEach($scope.vm.gridOptions.ngGrid.filteredRows, function(contact) {
            var exportContact = [];
            angular.forEach($scope.exportHeaders, function(header) {
              var field = contact.entity[header];
              exportContact.push(field);
            });
            results.push(exportContact);
          });
        }
        return results;
      };
      $scope.exportFilename = function() {
        return 'cliosearch-' + $scope.searchTerm + '.csv';
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

        var resultsHandler = function(data) {
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
              contact.date_of_birth = customDataExtraction(/date of birth/i, contact);
              contact.middle_name = customDataExtraction(/middle name/i, contact);
              var firstPhone = contact.phone_numbers[0];
              var firstAddress = contact.addresses[0];
              if (firstPhone) {
                contact.phone_number = firstPhone.number;
              }
              if (firstAddress) {
                contact.street      = firstAddress.street;
                contact.city        = firstAddress.city;
                contact.state       = firstAddress.state;
                contact.postal_code = firstAddress.postal_code;
              }
              if (contact.type === 'Company') {
                contact.organization = contact.name;
              } else {
                contact.organization = contact.company ? contact.company.name : null;
              }

              $scope.gridData.push(contact);
            });
            account.isLoading = false;

            $scope.vm.isLoading = false;
            $scope.vm.accountsSearched++;

          });

        };

        var errorsHandler = function(data) {
          angular.forEach(data.errors, function(error) {
            $.gritter.add({title: 'Error', text: error});
          });
        };

        Streamable.get('/query', searchData, {
          onData: function(data) {
            if (data.results) {
              resultsHandler(data);
            } else if (data.errors) {
              errorsHandler(data);
            }
          },
          onError: function(err) {
            // assume error happened b/c user is required to reauthenticate
            window.location = '/login';
          }
        });

      };
    }
  ]);


