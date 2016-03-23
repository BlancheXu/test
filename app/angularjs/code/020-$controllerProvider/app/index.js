/**
 * Created by genshixu on 2015/12/23.
 */
/*
angular.module('myApp',[])
.service('data',function() {
        return [
            {
                name:'zhangsan',
                age:25,
                city:'beijing'
            },
            {
                name:'lisi',
                age:43,
                city:'shanghai'
            }
        ];
    })
.controller('firstController',function($scope,data) {
        $scope.Data = data;
    })*/
angular.module('myApp',[],function($provide,$filterProvider,$controllerProvider) {
    $provide.service('data',function() {
        return [
            {
                name:'zhangsan',
                age:43,
                city:'beijing'
            },
            {
                name:'lisi',
                age:23,
                city:'shanghai'
            }
        ];
    });
    $filterProvider.register('filterAge',function() {
        return function(obj) {
            var newObj = [];
            angular.forEach(obj,function(item) {
                if(item.age > 30) {
                    newObj.push(item);
                }
            });
            return newObj;
        }
    })
    $controllerProvider.register('firstController',function($scope,data) {
        $scope.Data = data;
    })
})