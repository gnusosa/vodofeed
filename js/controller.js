App.controller("FeedCtrl", function ($scope,$http) {
  $scope.method = 'GET';
  $scope.url = 'http://localhost:9000?callback=JSON_CALLBACK';
  $http.jsonp($scope.url).
  success(function(data, status) {
    $scope.status = status;
    $scope.feeds = data;
  }).
  error(function(data, status) {
    $scope.data = data || "Request failed";
    $scope.status = status;
  });
});
