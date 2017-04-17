/**
 * Created by bhandr1 on 5/14/2016.
 */

(function () {

    angular
        .module('app.tapi')
        .service('ProfileBasicModel', ProfileBasicModel);

    function ProfileBasicModel(){
        var model = this;
        model.newProfileBasicModel = function () {
            return {
                "userId": "",
                "firstName": "",
				"lastName": "",
				"email": "",
				"password": "",
				"profileSummary": ""
            };
        };

        model.newLoginModel = function () {
            return {
                "email": "",
                "password": "",
                "firstName": "",
                "lastName": ""
            };
        };
        
        model.newTestSuiteModel = function () {
        	return {
        		"name": ""
        	};
        };
        
        model.newTestCaseModel = function () {
        	return {
        		"scenarioName": ""
        	};
        };

    }



})();