angular.module('loginController',['postServices']).
controller('loginController',function(postFactory,$rootScope,$scope){
    var self=this;
    $scope.username = "demo@gmail.com";
    $scope.password = "demo123";
    this.login=function(data){
        postFactory.login(data).then(function(response){
                if(response.statusCode === 200){
                    $rootScope.login=true;
                    $rootScope.data=response.data;
                    location.href="#";
                }else{
                    self.message=true;
                }
        });
    };
});