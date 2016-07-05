angular.module("myApp",["ngRoute"]).
  config(function($routeProvider){
     $routeProvider
         .when("/",{
               templateUrl:"partials/landing.html",
               controller:"appCtrl"
     })
     .when("/aboutMe",{
             templateUrl:"partials/aboutMe.html",
             controller:"aboutMe_Ctrl"
     })
     .when("/portfolio",{
              templateUrl:"partials/portfolio.html",
              controller:"port_Ctrl"
     })
     .when("/contact",{
          templateUrl:"partials/contact.html",
          controller:"contact_Ctrl"
     })
})
.controller("appCtrl",function(){
    
})
.controller("aboutMe_Ctrl",function($scope){
     var el=angular.element(document.querySelector(".carousel"));
    el.carousel({
        interval:5000
    });
})
.controller("port_Ctrl",function(){
    
})

.controller("contact_Ctrl",function(){
    
})
.directive("navDirective",function(){
       return{
           restrict:"AE",
           templateUrl:"directives/navigation.html"
       }
})

.directive("footerDirective",function(){
       return{
            restrict:"AE",
            templateUrl:"directives/footer.html"
       }
})