clioClientSearch.directive('clioloader', 
  ['$templateCache', function($templateCache) {
    console.log($templateCache.get('loader.html'));
    return {
      restrict: 'E',
      replace: true,
      template: $templateCache.get('loader.html')
    };
  }]
);
