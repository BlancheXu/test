/**
 * Created by genshixu on 2015/12/30.
 */
angular.module('myApp',[])
    .directive('customTags',function() {
        return {
            restrict: 'ECAM',
            controller:function($scope) {
                $scope.books = [
                    {
                        name:'js'
                    },
                    {
                        name:'php'
                    }
                ];
                this.addBook = function() {
                    $scope.$apply(function() {
                        $scope.books.push({
                            name:'angular'
                        });
                    });
                }
            },
            controllerAs:'bookListController',
            template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><add-book></add-book></div>',
            /*link:function(scope,iElement,iAttrs,bookListController) {
                iElement.on('click',booklistController.add);
            }*/
        }
    })
    .directive('addBook', function () {
        return {
            restrict:'ECAM',
            require:'^customTags',
            template:'<button>添加</button>',
            replace:true,
            link:function(scope,iElement,iAttrs,bookListController) {
                iElement.on('click',bookListController.addBook);
            }
        }
    })
.controller('firstController',['$scope',function($scope) {
    }]);