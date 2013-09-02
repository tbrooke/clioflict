clioClientSearch.directive('contactdetails', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'contact_details.html',
      scope: {
        contact: '='
      },
      link: function(scope, element, attrs) {
        scope.contactTypeClass = scope.contact.type.toLowerCase() + '-details';
      }
    };
  }]
);