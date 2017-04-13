/**
 * Created by bhandr1 on 5/14/2016.
 */
(function () {
    angular.module('app.tapi').factory('ProfileBasicFactory',ProfileBasicFactory);

    ProfileBasicFactory.$inject = ["RestHelper","ProfileConstant"];

    function ProfileBasicFactory(RestHelper,ProfileConstant) {

        return {
            createUserProfile: createUserProfile,
            getUserProfileByUserId: getUserProfileByUserId,
			updateUserProfile: updateUserProfile,
            login:login,
            searchContact: searchContact,
            createTestSuiteData: createTestSuiteData,
            getAllTestSuites: getAllTestSuites
        };

        function getUserProfileByUserId(userId){
            //TODO, configure the url and service param, userID
            return RestHelper.get("",ProfileConstant.PROFILE_BASIC_APP_URL_BASE+ "api/profile/basic/byUserId?userId="+userId);
        }

        function createUserProfile(data,userId){
            return RestHelper.post("",ProfileConstant.PROFILE_BASIC_APP_URL_BASE+ "api/profile/basic",data);
        }
        
        function updateUserProfile(data){
            //TODO, configure the url and service param, userID
            return RestHelper.put("",ProfileConstant.PROFILE_BASIC_APP_URL_BASE+ "api/profile/basic",data);
        }
        function login(data){
            //TODO, configure the url and service param, userID
            return RestHelper.post("",ProfileConstant.PROFILE_BASIC_APP_URL_BASE+ "api/profile/basic/login",data);
        }

        function searchContact(data){
            //TODO, configure the url and service param, userID
            return RestHelper.get("",ProfileConstant.PROFILE_BASIC_APP_URL_BASE+ "api/profile/basic/search?name="+data);
        }
        
        function createTestSuiteData(data){
        	return RestHelper.post("",ProfileConstant.TESTSUITE_BASIC_APP_URL_BASE,data)
        }
        
        function getAllTestSuites(){
        	return RestHelper.get("",ProfileConstant.TESTSUITE_BASIC_APP_URL_BASE + "/list")
        }


    }
})();
