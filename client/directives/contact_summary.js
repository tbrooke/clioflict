clioClientSearch.directive('contactsummary', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'contact_summary.html',
      scope: {
        contact: '='
      },
      link: function(scope, element, attrs) {
        scope.contactTypeClass = 'summary ' + 
                                 scope.contact.type.toLowerCase() + '-summary';
      }
    };
  }]
);
