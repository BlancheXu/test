/**
 * Created by genshixu on 2015/12/23.
 */
angular.module('myApp',[])
    .factory('customService',function($window) {
        console.log($window);
    })
    //��ʾ������ע��
    .controller('firstController',['$scope','$filter','customService',function(a,b,c) {
        console.log(b);
        console.log(b('json')(['��',2,3]));
    }]);
function otherController(a) {
    console.log(a);
}
//ͨ��$inject���ԣ����ߵ�ǰ������������ע����Щ����
otherController.$inject = ['$scope'];
