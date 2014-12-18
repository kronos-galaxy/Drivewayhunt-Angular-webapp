'use strict';

module.exports = function(app) {
  app.controller('NewSale',['$scope', '$upload', function($scope, $upload) {
    $scope.$watch('myFiles', function() {
      $scope.upload = $upload.upload({
        url: "https://api.cloudinary.com/v1_1/" + 'dqwea7i3j' + "/upload",
        data: {upload_preset: 'osxh5dpi', tags: 'myphotoalbum', context:'photo=' + $scope.title},
        file: $scope.myFiles
      }).progress(function (e) {
        console.log('e '+ e);
      }).success(function (data, status, headers, config) {
        console.log('data ', data);
      });
    });
  }]);
}