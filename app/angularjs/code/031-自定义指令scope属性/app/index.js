/**
 * Created by genshixu on 2015/12/30.
 */
angular.module('myApp',[])
    .directive('bookList',function() {
        return {
            restrict:'ECAM',

            controller:function($scope) {
                console.log($scope.c);
                //$scope.books = $scope.a();
                /*$scope.books = $scope.b;
                $scope.b.push(
                    {
                        name:'jsp'
                    }
                )*/

                //$scope.books = $scope.c;
            },
            scope: {
                //父元素的books属性
                //a: '&books'
                //双向绑定
                //b:'=parentBooks'
                //@ 不能引用对象
                c:'@scopeBooks'
            },
            controllerAs:'bookListController',
            template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
            replace:true
        };
    })
.controller('firstController',['$scope',function($scope) {
        console.log($scope);
        $scope.books = [
            {
                name:'js',
            },
            {
                name:'java'
            }
        ];
    }])