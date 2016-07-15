// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ionicApp = angular.module('ionic_social_sharing', ['ionic', 'ngCordova', 'ionic_social_sharing.controllers']);

ionicApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//ionicApp.controller("MainController", function($scope, $cordovaSocialSharing) {
//
//  $scope.shareAnywhere = function() {
//    $cordovaSocialSharing.share("Welcome to Dota 2's blog.", "Dota 2 Blog", "http://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1434653483", "http://blog.dota2.com/");
//  };
//
//  $scope.shareViaTwitter = function(message, image, link) {
//    $cordovaSocialSharing.canShareVia("twitter", message, "Share to Twitter", image, link).then(function(result) {
//      $cordovaSocialSharing.shareViaTwitter(message, image, link);
//    }, function(error) {
//      alert("Cannot share on Twitter");
//    });
//  };
//
//  $scope.shareViaFacebook = function(message, image, link) {
//    var devicePlatform = device.platform;
//    var canShareVia1stParam = 'facebook';
//    if (devicePlatform == 'iOS'){
//      canShareVia1stParam = 'com.apple.social.' + canShareVia1stParam;
//    }
//    $cordovaSocialSharing.canShareVia(canShareVia1stParam, message, "Share to FB", image, link).then(function(result) {
//      $cordovaSocialSharing.shareViaFacebook(message, image, link);
//    }, function(error) {
//      alert("Cannot share on Facebook");
//    });
//  };
//
//});
