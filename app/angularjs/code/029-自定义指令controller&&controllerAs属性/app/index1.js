/**
 * Created by genshixu on 2015/12/30.
 */
angular.module('myApp',[])
    .directive('bookList',function() {
        return {
            restrict:'ECAM',
            controller: function ($scope) {
                $scope.books = [
                    {
                        name:'java'
                    },
                    {
                        name:'javascript'
                    }
                ];
              this.addBook = function() {
                  $scope.$apply(function() {
                      $scope.books.push(
                          {
                              name:'angularjs'
                          }
                      );
                  });
              }
            },
            template:'<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><add-book></add-book></div>',
            replace:true,
            controllerAs:'bookListController'
        }
    })
    .directive('addBook',function() {
        return {
            restrict:'ECAM',
            require:'^bookList',
            template:'<button>添加</button>',
            replace:true,
            link:function(scope,iElement,iAttrs,bookListController) {
                iElement.on('click',bookListController.addBook);
            }
        }
    })