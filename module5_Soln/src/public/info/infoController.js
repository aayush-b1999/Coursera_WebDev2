(function () {
    "use strict";
    
    angular.module('public')
    .controller('infoController', infoController);
    
    infoController.$inject = ['formService'];
    function infoController(formService) {
        var $ctrl = this;
        $ctrl.ret=formService.give();
        $ctrl.first_name=$ctrl.ret.first_name;
        $ctrl.last_name=$ctrl.ret.last_name;
        $ctrl.email=$ctrl.ret.email;
        $ctrl.short_name=$ctrl.ret.short_name;
        $ctrl.phno=$ctrl.ret.phno;
        $ctrl.nahi=function () {
            if($ctrl.first_name===undefined || $ctrl.first_name==="")return true;
            return false;
        }
    }
    
    
    })();
    