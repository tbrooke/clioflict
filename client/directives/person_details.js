clioClientSearch.directive('persondetails', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'person_details.html',
      scope: {
        person: '='
      }
    };
  }]
);