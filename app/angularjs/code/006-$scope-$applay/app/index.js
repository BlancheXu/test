/**
 * Created by genshixu on 2015/12/21.
 */
var showDate = function ($scope) {
    $scope.date = new Date();
    setInterval(function(){
        //apply() 触发脏检查
        $scope.$apply(function() {
            $scope.date = new Date();
            $scope.name = '张三';
        })
    },1000);
}
