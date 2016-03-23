/**
 * Created by genshixu on 2015/12/22.
 */
angular.module('myApp',[])
    .factory('data',function() {
        return {
            message:'I am shared information',
            city:[
                {
                    name:'shanghai',
                    jc:'sh'
                },
                {
                    name:'beijing',
                    jc:'bj'
                }
            ]
        }
    })
.controller('firstController',function($scope,data,$filter) {
        $scope.name = 'HelloKitty';
        $scope.Data = data;
        var number = $filter('number')(11);
        console.log(number);
        var jsonString = $filter('json')($scope.Data);
        console.log(jsonString);

        $scope.checkName =function(obj) {
            if(obj.jc.indexOf('h') == -1) {
                return false;
            }
            return true;
        }
    })