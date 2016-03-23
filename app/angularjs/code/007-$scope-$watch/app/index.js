/**
 * Created by genshixu on 2015/12/21.
 */
var firstController = function ($scope) {
    $scope.name = 'zhangsan';
    $scope.count = 0;
    $scope.$watch('name', function () {
        ++$scope.count;
        if($scope.count>30) {
            $scope.name = '>30';
        }
    })
}
