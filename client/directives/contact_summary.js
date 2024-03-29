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

        scope.glyphsClass = 'glyphicon ';
        if (scope.contact.type === 'Person') {
          scope.glyphsClass += 'glyphicon-user';
        } else {
          scope.glyphsClass += 'glyphicon-home';
        }
      }
    };
  }]
);
