clioClientSearch.directive('companydetails', 
  [function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'company_details.html',
      scope: {
        company: '='
      }
    };
  }]
);
