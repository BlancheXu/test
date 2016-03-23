/**
 * Created by genshixu on 2015/12/22.
 */
var myApp = angular.module('myApp',[],function($provide) {
    $provide.provider('customService', function () {
        this.$get = function() {
            return {
                message:'customerService message'
            }
        }
    })
});
myApp.controller('firstController',function($scope,customService) {
    $scope.name = 'HelloKitty';
    console.log(customService);
})

