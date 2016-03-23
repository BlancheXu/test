/**
 * Created by genshixu on 2015/12/21.
 */
var cartController = function ($scope) {
    $scope.cart = [
        {
            id:1000,
            name:'iphone6',
            quantity:10,
            price:5000
        } ,
        {
            id:232,
            name:'ipad',
            quantity:1,
            price:4888
        } ,
        {
            id:103,
            name:'mac',
            quantity:10,
            price:8767
        }
    ];
    $scope.remove = function(id) {
        var index = -1;
        angular.forEach($scope.cart,function(item,key) {
            if(id == item.id) {
                index = key;
            }
        })
        console.log(index);
        if(index != -1) {
            $scope.cart.splice(index,1);
        }
    }
    $scope.totalPrice = function() {
        var total = 0;
        angular.forEach($scope.cart,function(item) {
            total += item.quantity * item.price;
        })
        return total;
    }
    $scope.totalNum = function () {
        var sum = 0;
        angular.forEach($scope.cart, function (item) {
            sum += item.quantity;
        })
        return sum;
    }
    $scope.reduce = function(id) {
        var index = -1;
        angular.forEach($scope.cart,function(item,key) {
            if(id == item.id) {
                index = key;
            }
        });
        var availNum = $scope.cart[index].quantity;

        if(index != -1 && availNum > 1) {
            $scope.cart[index].quantity --;
        }
        if(availNum <= 1) {
            if(confirm('delete it?')) {
                $scope.cart.splice(index,1);
            }
        }
    }
    $scope.add = function(id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if(id == item.id) {
                index = key;
            }
        });
        if(index != -1) {
            $scope.cart[index].quantity ++;
        }
    }
     $scope.$watch('cart',function(newValue,oldValue) {
        var index = -1;
        angular.forEach($scope.cart,function(item,key) {
            if(item.quantity < 1) {
                var returnValue = confirm('delete it?');
                if(returnValue) {
                    $scope.remove(item.id);
                }else {
                    item.quantity = oldValue[key].quantity;
                }
                return;
            }
        });
    },true);
}
