/**
 * Created by genshixu on 2015/12/22.
 */
angular.module('myApp',[])
    .factory('data',function() {
        return {
            message:'shareinfo'
        }
    })
    .controller('firstController', function ($scope,data) {
        $scope.name = data;
    })
.controller('secondController',function($scope,data) {
        $scope.Data = data;
    })