/**
 * Created by genshixu on 2016/1/4.
 */
angular.module('myApp',[])
.directive('bookList',function() {
        return {
            restrict:'ECAM',
            controller:function($scope) {
                $scope.books = $scope.a();
            },
            scope:{
                a:'&parentbook'
            },
            template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace:true

        }
    })
.controller('firstController',['$scope',function($scope) {
        $scope.books = [
            {
                name:'java'
            },
            {
                name:'js'
            }
        ];
    }])