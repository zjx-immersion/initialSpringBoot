(function () {
    'use strict';

    angular
        .module('initialSpringBootApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
