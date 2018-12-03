const angularApp=angular.module('mainApp',['ngRoute','homeController','loginController']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    templateUrl:'./partials/home.html',
    controller:'homeController as hc',
    title:'Front End Coding Challenge'
}).
when('/about',{
    template:'<a href="#"><-</a><p>Freelance Full Stack Web Developer, Augmented Reality Expert, Java Programmer</p>',
    title:'Portfolio of Creative Developer'
}).
when('/admin',{
    templateUrl:'./partials/login.html',
    controller:'loginController as lc',
    title:'Login Page'
});

}]);

angularApp.controller('mainController',function($rootScope){
   var self=this;
    if(localStorage.getItem('isLogin')==1){
         $rootScope.login=true;
         $rootScope.data=JSON.parse(localStorage.getItem('userData'));
    }else{
        $rootScope.login=false;
    }

    this.logout=function(){
            localStorage.clear();
            location.reload();
    };
        
});

angularApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);