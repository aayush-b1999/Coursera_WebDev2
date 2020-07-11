(function () {
    "use strict";
    
    angular.module('public')
    .controller('formController', formController);
    
    formController.$inject = ['formService','allcat'];
    function formController(formService,allcat) {
        var $ctrl = this;
        $ctrl.first_name="";
        $ctrl.last_name="";
        $ctrl.email="";
        $ctrl.short_name="";
        $ctrl.phno="";
        $ctrl.done=false;
        $ctrl.allcat=allcat;
        $ctrl.click=function(){
            formService.register($ctrl);
            $ctrl.done=true;
        }
        $ctrl.check=function () {  
            // console.log($ctrl.short_name);
            // console.log($ctrl.allcat);
            for(var item of $ctrl.allcat){
                if(item==($ctrl.short_name))return false;
            }
            return true;
        }
    }
    
    
    })();
    