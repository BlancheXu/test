/**
 * Created by genshixu on 2015/12/22.
 */
/*var myApp = angular.module('myApp',[]);
myApp.controller('firstController',function($scope) {
    $scope.name = 'firstController';
});*/
angular.module('myApp',[])
    .factory('data',function() {
        return {
            message:'shared message'
        }
    })/*
    .controller('firstController',function($scope) {
         $scope.data = {
             name:'firstController'
         };
})
    .controller('secondController',function($scope) {
        console.log($scope);
        $scope.data = $scope.$$prevSibling.data;
    })*/
    .controller('firstController', function ($scope,data) {
        $scope.Data = data;
    })
    .controller('secondController',function($scope,data) {
        $scope.Data = data;
    })
