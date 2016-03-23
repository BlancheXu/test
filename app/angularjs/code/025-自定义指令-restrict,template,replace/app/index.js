/**
 * Created by genshixu on 2015/12/24.
 */
//angular.module('myApp',[],['$compileProvider',function($compileProvider) {
//    $compileProvider.directive('customTags',function() {
//        return {
//            restrict:'ECAM',
//            template:'<div>hello</div>'
            //template:'<div class="template">afafa</div>'
            //template:'<div name="template">AA</div>',
            //template:'<!--<div>MM</div>-->'
//        };
//    });
//}])
angular.module('myApp',[],['$compileProvider',function($compileProvider) {
    $compileProvider.directive('customTags', function () {
        return {
            restrict:'E',
            template:'<div>templateE</div>'
        }
    })
}])