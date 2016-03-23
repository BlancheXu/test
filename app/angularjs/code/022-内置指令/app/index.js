/**
 * Created by genshixu on 2015/12/23.
 */
angular.module('myApp',[])
.controller('firstController',['$scope',function($scope) {
        $scope.value = true;
        $scope.changeValue = function(event) {
            console.log(event.target);
            angular.element(event.target).html('改变为'+$scope.value);
            if($scope.value)  {
                $scope.value = false;
            }else{
                $scope.value = true;
            }
        }
        $scope.defaultStyle = {
            color:'red',
            marginTop:200+'px'
        }
    }])
/*
.controller('firstController',function($scope) {
        $scope.value = true;
        $scope.changeValue = function() {
            if($scope.value) {
                $scope.value = false;
            }else {
                $scope.value = true;
            }
        }
    })*/
