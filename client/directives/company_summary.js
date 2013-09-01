clioClientSearch.directive('companysummary', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'company_summary.html',
      scope: {
        company: '='
      }
    };
  }]
);
