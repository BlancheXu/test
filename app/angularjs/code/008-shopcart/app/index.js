/**
 * Created by genshixu on 2015/12/21.
 */
var cartController = function ($scope) {
    $scope.cart = [
        {
            id:100,
            name:'iphone',
            quantity:5,
            price:5000
        },
        {
            id:156,
            name:'ipad',
            quantity:43,
            price:4555
        },
        {
            id:145,
            name:'mac',
            quantity:2,
            price:8999
        }
    ];
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart,function(item) {
            total += item.quantity * item.price;
        })
        return total;
    }

   $scope.totalNum = function () {
       var sum = 0;
       angular.forEach($scope.cart,function(item) {
           sum += item.quantity;
       })
       return sum;
   }
    $scope.remove = function(id) {
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id === id) {
                index = key;
            }
        });
        if(index !== -1) {
            $scope.cart.splice(index,1);
        }
    }
    $scope.reduce = function (id) {
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id === id) {
                index = key;
            }
        });
        if(index !== -1) {
            if($scope.cart[index].quantity > 1) {
                --$scope.cart[index].quantity;
            }else {
                if(confirm('remove it?')==true){
                    $scope.remove(id);
                }

            }
        }
    }
    $scope.add = function (id) {
        var index = -1;
        angular.forEach($scope.cart,function (item,key) {
            if(item.id === id) {
                index = key;
            }
        });
        if(index !== -1 && $scope.cart[index].quantity==0){
            $scope.remove(index);
        }
        if(index !== -1 && $scope.cart[index].quantity) {
            $scope.cart[index].quantity ++;
        }
    }
    $scope.$watch(function (newValue, oldValue) {
        angular.forEach($scope.cart,function(item) {
            if(item.quantity <1) {
                var isDelete = confirm('remove it?');
                if(isDelete){
                    $scope.remove(item.id);
                }
            }
        })
    },true);
}
