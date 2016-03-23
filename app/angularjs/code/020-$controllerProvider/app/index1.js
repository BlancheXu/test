/**
 * Created by genshixu on 2015/12/23.
 */
angular.module('myApp',[],function($provide,$filterProvider,$controllerProvider) {
    $provide.service('data',function() {
        return [
            {
                name:'zhangsan',
                age:40,
                city:'beijing'
            },
            {
                name:'lisi',
                age:23,
                city:'shanghai'
            }
        ];
    });
    $controllerProvider.register('firstController',function($scope,data) {
        $scope.Data = data;
        $scope.name = 'haha';
    });
    $filterProvider.register('filterAge',function() {
        return function(obj) {
            var newObj = [];
            angular.forEach(obj,function(item) {
                if(item.age>30) {
                    newObj.push(item);
                }
            })
            return newObj;
        }
    });
})
