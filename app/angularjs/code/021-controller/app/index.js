/**
 * Created by genshixu on 2015/12/23.
 */
angular.module('myApp',[])
    .factory('customService',function($window) {
        console.log($window);
    })
    //显示的依赖注入
    .controller('firstController',['$scope','$filter','customService',function(a,b,c) {
        console.log(b);
        console.log(b('json')(['我',2,3]));
    }]);
function otherController(a) {
    console.log(a);
}
//通过$inject属性，告诉当前控制器，依赖注入哪些服务
otherController.$inject = ['$scope'];
