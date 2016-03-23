/**
 * Created by genshixu on 2015/12/24.
 */
angular.module('myApp',[])
.directive('customTags',function() {
        return {
            restrict:'E',
            templateUrl:'template/template.html',
            //template:'<div>EEEE</div>',
            replace:true
        }
    })
    .directive('customTags2', function () {
        return {
            restrict:'E',
            templateUrl:'customTags2',
            replace:true,
            priority:-1
        }
    })
    .directive('customTags3',function() {
        return {
            restrict:'ECMA',
            template:'<div>新数据 <span ng-transclude=""></span></div>',
            replace:true,
            transclude:true
        }
    })
.controller('firstController',['$scope',function($scope) {
        $scope.name = '张三';
    }])