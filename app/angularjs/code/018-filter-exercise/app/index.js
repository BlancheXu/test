/**
 * Created by genshixu on 2015/12/23.
 */
angular.module('product',[])
    .service('productData',function() {
        return [{
            id:101,
            name:'iphone',
            price:4888
        },
        {
            id:102,
            name:'mac',
            price:8888
        },
        {
            id:103,
            name:'ipad',
            price:4444
        }
        ];
    })
    .controller('productController',function($scope,productData) {
        $scope.productData = productData;
        $scope.orderType = 'id';
        $scope.order = '-';
        $scope.sort = function(type) {
            $scope.orderType = type;
            if($scope.order === '-') {
                $scope.order = '';
            }else {
                $scope.order = '-';
            }
        }
    })
