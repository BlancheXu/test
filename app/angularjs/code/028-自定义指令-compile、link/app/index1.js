/**
 * Created by genshixu on 2015/12/30.
 */
var i = 0;
angular.module('myApp',[])
.directive('customTags1',function() {
        return {
            restrict:'ECAM',
            template:'<div>{{user.name}}</div>',
            replace:true,
            compile:function(tElement,tAttrs,transclude) {
                tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        iElement.on('click',function() {
                            scope.$apply(function () {
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                            })
                        })
                    },
                    post:function postLink(scope, iElement, iAttrs, controller) {

                    }
                }
            }
        }
    })
.controller('firstController',['$scope', function ($scope) {
        $scope.users = [
            {
                id:100,
                name:'张三'
            },
            {
                id:102,
                name:'李四'
            }
        ];
    }])