/**
 * Created by wendysa on 8/21/15.
 */
var ionicModule = angular.module('ionic_social_sharing.controllers', []);

ionicModule.controller("MainController", function($scope, $cordovaSocialSharing) {

    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("Welcome to Dota 2's blog.", "Dota 2 Blog", "http://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1434653483", "http://blog.dota2.com/");
    };

    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, "Share to Twitter", image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    };

    $scope.shareViaFacebook = function(message, image, link) {
        var devicePlatform = device.platform;
        var canShareVia1stParam = 'facebook';
        if (devicePlatform == 'iOS'){
            canShareVia1stParam = 'com.apple.social.' + canShareVia1stParam;
        }
        $cordovaSocialSharing.canShareVia(canShareVia1stParam, message, "Share to FB", image, link).then(function(result) {
            $cordovaSocialSharing.shareViaFacebook(message, image, link);
        }, function(error) {
            alert("Cannot share on Facebook");
        });
    };

});
