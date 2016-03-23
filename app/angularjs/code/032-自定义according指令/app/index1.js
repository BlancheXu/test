/**
 * Created by genshixu on 2016/1/4.
 */
angular.module('myApp',[])
.directive('kittenGroup', function () {
        return {
            restrict:'ECAM',
            template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
            replace:true
        }
    })
.controller('firstController',['$scope', function ($scope) {
        $scope.books = [
            {
                name:'js'
            },
            {
                name:'jsp'
            }
        ];
    }])