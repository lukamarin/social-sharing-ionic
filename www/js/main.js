/**
 * Created by wendysa on 8/21/15.
 */

requirejs.config({
    baseUrl: '',
    paths: {
        //// 3rd party libs

        // modules
        'controllers': 'js/controllers',

        // main entry
        'app': 'js/app'
    },
    shim: {
        //// 3rd party libs

        ////Controller & services

        // app depend on controller & service files
        'app': ['controllers']
    }
});

require(['app'], function(){
    angular.bootstrap(document.body, ['ionic_social_sharing']);
});
