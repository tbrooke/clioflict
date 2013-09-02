clioClientSearch.directive('contactdetails', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'contact_details.html',
      scope: {
        contact: '=',
        removeContact: '&'
      },
      link: function(scope, element, attrs) {
        scope.contactTypeClass = scope.contact.type.toLowerCase() + '-details';

        scope.showHideContact = function(contact) {
          if (contact.isCollapsed) {
            contact.isCollapsed = false;
          } else {
            contact.isCollapsed = true;
          }
        };
      }
    };
  }]
);