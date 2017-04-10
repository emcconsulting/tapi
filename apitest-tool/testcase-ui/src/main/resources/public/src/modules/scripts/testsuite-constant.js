/**
 * Created by bhandr1 on 5/14/2016.
 */

(function () {

    angular
        .module('app.tapi')
        .service('ProfileConstant', ProfileConstant);
    
    ProfileConstant.$inject = [];
    
    function ProfileConstant(){
        var constant = this;
        //constant.APP_URL_BASE="http://localhost:8080/";
        //constant.APP_URL_BASE="http://pronet-profile-details.cfapps.io/";
        constant.APP_URL_BASE="http://pronet-edge.cfapps.io/zuul/";
        constant.SKILL_APP_URL_BASE="http://pronet-edge.cfapps.io/zuul/";
        constant.CONN_APP_URL_BASE="http://pronet-edge.cfapps.io/zuul/";
        constant.PROFILE_BASIC_APP_URL_BASE="http://pronet-edge.cfapps.io/zuul/";
        constant.TESTSUITE_BASIC_APP_URL_BASE="http://localhost:8095/testSuite";
    }
    
})();
    
    