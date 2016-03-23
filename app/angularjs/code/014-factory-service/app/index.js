/**
 * Created by genshixu on 2015/12/22.
 */
var myApp = angular.module('myApp',[],function($provide) {
    //自定义工厂
    $provide.factory('customFactory',function() {
        return [1,2,3,4,5];
    });
    //自定义服务，返回的必须是引用类型的
    $provide.service('customService',function(){
        return ['hello'];
    })
});
myApp.controller('firstController',function($scope,customFactory,customService) {
    $scope.name = 'duola';
    console.log(customFactory);
    console.log(customService);
})
