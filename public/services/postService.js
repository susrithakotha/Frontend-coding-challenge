angular.module('postServices', []).factory('postFactory', function ($http, $timeout) {
    var services = {};

    services.login = (data) => {
        if (data.email === "demo@gmail.com" && data.password === "demo123") {
            return $timeout(() => {
                return { "data": "success", "statusCode": 200 }
            }, 0);
        } else {
            return $timeout(
                () => {
                    return { "data": "failure", "statusCode": 500 }
                }, 0
            );
        }
    };

    return services;

});