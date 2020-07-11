(function () {
    "use strict";
    
    angular.module('public')
    .service('formService', formService);

    formService.$inject=['$http','ApiPath'];
    function formService($http,ApiPath) {
        var $ctrl = this;
        $ctrl.first_name="";
        $ctrl.last_name="";
        $ctrl.email="";
        $ctrl.short_name="";
        $ctrl.phno="";
        var ret=[];
        $ctrl.register=function(val){
            $ctrl.first_name=val.first_name;
            $ctrl.last_name=val.last_name;
            $ctrl.email=val.email;
            $ctrl.short_name=val.short_name;
            $ctrl.phno=val.phno;
        }
        $ctrl.give=function(){
            // console.log($ctrl)
            return $ctrl;
        }
        $ctrl.help=function () {
            var x=$http({
                method: 'GET',
                url: ApiPath + '/categories.json'
            }).then(function (res) {  
                res=res.data;
                // console.log(res);
                ret=[];
                for(var item of res){
                    // console.log(item.short_name)
                    ret.push(item.short_name);
                }
                // console.log(ret);
                return ret;
            })
            .catch(function(error){
                console.log(error);
            })
            // console.log(x);
            return x;
        }
    }
    
    
})();
    