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
                console.log('customTags1 compile...');
                tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
                return {
                    pre:function preLink(scope,iElement,iAttrs,controller) {
                        console.log('customTags1 preLink...');
                    },
                    post:function postLink(scope,iElement,iAttrs,controller) {
                        console.log('customTags1 postLink...');
                        iElement.on('click',function() {
                            scope.$apply(function() {
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                            });
                        })
                    }
                }
            }
        }
    })
    .directive('customTags2',function() {
        return {
            restrict:'ECMA',
            replace:true,
            compile: function (tElement,tAttrs,transclude) {
                console.log('customTags2 compile...');

                return {
                    pre:function preLink() {
                        console.log('customTags2 preLink...');
                    },
                    post:function postLink() {
                        console.log('customTags2 postLink...');
                    }
                }

            }
        }
    })
.controller('firstController', ['$scope',function($scope) {
        $scope.users = [
            {
                name:'张三',
                age:'21'
            },
            {
                name:'李四',
                age:'25'
            }
        ];
    }]);