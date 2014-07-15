// field name should be a regular expression to match the
// custom data field against
var customDataExtraction = function(fieldName, contact) {
    var customDataValue;

    //  Clio API Docs for Contact
    //
    // custom_field_values:             (array of hashes) A polymorphic collect of custom field values set on this contact. You can get a list of custom fields from the custom fields and custom field sets end points.
    //   id:                            (int, readonly) Unique identifier. Note
    //   type:                          (string, required) Type of custom field value, one of [CustomFieldCheckboxValue, CustomFieldContactValue, CustomFieldCurrencyValue, CustomFieldDateValue, CustomFieldTimeValue, CustomFieldEmailValue, CustomFieldMatterValue, CustomFieldNumericValue, CustomFieldPicklistValue, CustomFieldTextAreaValue, CustomFieldTextLineValue, CustomFieldUrlValue].
    //   created_at:                    (datetime, readonly) Date/time of record creation
    //   updated_at:                    (datetime, readonly) Date/time of last modification of record
    //   custom_field:                  (hash, required) The custom field of the custom field value
    //   value:                         (depending on type) The data of the custom field value. The data must be valid based on the type. For CustomFieldContactValue this is the id of the Contact. For CustomFieldMatterValue this is the id of the Matter. For CustomFieldPicklistOptionValue this is the id of the picklist option.
    //   contact:                       (hash, readonly, only for CustomFieldContactValue) The contact of the custom field contact value
    //   matter:                        (hash, readonly, only for CustomFieldMatterValue) The matter of the custom field matter value
    //   custom_field_picklist_option:  (hash, readonly, only for CustomFieldPicklistValue) The option of the custom field picklist value

    // Clio API Docs for Custom Field
    //
    // id:                             (int, readonly) Unique identifier
    // created_at:                     (datetime, readonly) Date/time of record creation
    // updated_at:                     (datetime, readonly) Date/time of last modification of record
    // name:                           (string, required) Custom Field Set name
    // parent_type:                    (string, required) Type of object the custom field is for, either "Contact" or Matter"
    // field_type:                     (string, required) Field type of the custom field, one of ["checkbox", "contact", "currency", "date", "time", "email", "matter", "numeric", "picklist", "text_area", "text_line", "url"]
    // displayed:                      (boolean, required) If the custom field is displayed by default or not
    // custom_field_picklist_options:  (array of hashes) If the field_type is a "picklist" this field is populated with a collection of options, otherwise nil.

  
    angular.forEach(contact.custom_field_values, function(custom_data) {
      if (custom_data.custom_field && custom_data.custom_field.name.match(fieldName)) {
    
        if (custom_data.custom_field.name.match("Contact Type")) {
          customDataValue = custom_data.custom_field_picklist_option.name;
        } else {
          customDataValue = custom_data.value;
        }
      }})
      return customDataValue;
    };




    clioClientSearch.controller('SearchController', ['$scope', 'searchDB',
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
          'contact_type',
          'first_name',
          'last_name',
          'middle_name',
          'date_of_birth',
          'phone_number',
          'street',
          'city',
          'state',
          'postal_code',
          'organization'
        ];

        $scope.vm.gridOptions = {
          data: 'gridData',
          enableColumnReordering: true,
          enableColumnResize: true,
          filterOptions: $scope.filterOptions,
          columnDefs: [{
            field: 'account_name',
            displayName: 'Account Name',
            width: 120
          }, {
            field: 'contact_type',
            displayName: 'Type'
          }, {
            field: 'first_name',
            displayName: 'First Name'
          }, {
            field: 'last_name',
            displayName: 'Last Name'
          }, {
            field: 'middle_name',
            displayName: 'Middle Name'
          }, {
            field: 'date_of_birth',
            displayName: 'Date of Birth'
          }, {
            field: 'phone_number',
            displayName: 'Phone Number'
          }, {
            field: 'street',
            displayName: 'Street'
          }, {
            field: 'city',
            displayName: 'City'
          }, {
            field: 'state',
            displayName: 'State'
          }, {
            field: 'postal_code',
            displayName: 'Zip Code'
          }, {
            field: 'organization',
            displayName: 'Organization'
          }, ],
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
          var searchData = {
            params: {
              searchTerm: $scope.searchTerm
            }
          };
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

            $scope.$apply(function() {
              angular.forEach(results.contacts, function(contact) {

                contact.account_name = account.name;
                contact.date_of_birth = customDataExtraction(/date of birth/i, contact);
                contact.middle_name = customDataExtraction(/middle name/i, contact);
                contact.contact_type = customDataExtraction(/contact type/i, contact);
                var firstPhone = contact.phone_numbers[0];
                var firstAddress = contact.addresses[0];
                if (firstPhone) {
                  contact.phone_number = firstPhone.number;
                }
                if (firstAddress) {
                  contact.street = firstAddress.street;
                  contact.city = firstAddress.city;
                  contact.state = firstAddress.state;
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
              $.gritter.add({
                title: 'Error',
                text: error
              });
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