clioClientSearch.directive('personsummary', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'person_summary.html',
      scope: {
        person: '='
      }
    };
  }]
);
