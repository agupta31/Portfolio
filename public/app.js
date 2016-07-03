angular.module("myApp",["ngRoute"]).
  config(function($routeProvider){
     $routeProvider
         .when("/",{
               templateUrl:"partials/landing.html"
     })
     .when("/aboutMe",{
             templateUrl:"partials/aboutMe.html"
     })
})

.directive("navDirective",function(){
       return{
           restrict:"AE",
           templateUrl:"directives/navigation.html"
       }
})