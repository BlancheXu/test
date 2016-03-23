/**
 * Created by genshixu on 2015/12/31.
 */
angular.module('myApp',[])
    .factory('Data',function() {
        return [
            {
                title:'cols1',
                content:'collapse1'
            },
            {
                title:'cols2',
                content:'collapse2'
            },
            {
                title:'cols3',
                content:'collapse3'
            }
        ];
    })
    .directive('kittencupGroup',function() {
        return {
            restrict:'ECAM',
            template:'<div class="panel-group" ng-transclude=""></div>',
            replace:true,
            transclude:true,
        }
    })
    .directive('kittencupCollapse',function() {
        return {
            restrict:'E',
            templateUrl:'tmp/kittencupCollapse.html',
            replace:true,
            scope:{
                heading:'@'
            },
            transclude:true
        }
    })
.controller('firstController',['$scope','Data',function($scope,Data) {
        $scope.data = Data;
    }]);