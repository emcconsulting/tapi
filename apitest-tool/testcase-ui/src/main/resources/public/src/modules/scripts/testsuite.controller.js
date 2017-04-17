/**
 * Created by bhandr1 on 5/13/2016.
 */


(function () {
    angular.module('app.tapi').controller('TestSuiteController',TestSuiteController);

    function TestSuiteController($scope,ProfileBasicModel,ProfileBasicFactory,$sessionStorage,$state){

        init();

        function init() {
            initModels();
           
            	$scope.testSuitesList = [];
            	
            	ProfileBasicFactory.getAllTestSuites().then(success,error);
            	function success(response) {
            		$scope.testSuitesList = response.data;
                }
                function error(response) {
                	
                }
                
                
                $scope.testCasesList = [];
            	
            	
            	ProfileBasicFactory.getAllTestCases().then(success,error);
            	function success(response) {
            		$scope.testCasesList = response.data;
                }
                function error(response) {
                	
                }
                
            
        }

        function initModels() {
            
        	$scope.testSuiteModel = ProfileBasicModel.newTestSuiteModel();
        	$scope.testSuiteList = ProfileBasicModel.newTestSuiteModel();
        	$scope.testCaseModel = ProfileBasicModel.newTestCaseModel();
        }
        function reset() {
        	$scope.name = "";
        	$scope.testSuitesList = "";
        }



        $scope.saveProfile = function () {
            delete $scope.profileBasicModel.password;

            ProfileBasicFactory.updateUserProfile($scope.profileBasicModel).then(success, error);
            function success(response) {
            	
            }
            function error(response) {
            	
            }
            
        };
        
        $scope.createTestSuite = function () {
            $state.go('createTestSuite');
            
        };
        
        $scope.createTestCase = function () {
        	$state.go('createTestCase');
        }
        
        $scope.saveTestSuite = function () {
        	 $scope.testSuiteModel.name = $scope.name;
             ProfileBasicFactory.createTestSuiteData($scope.testSuiteModel).then(success, error);
             function success(response) {
             	reset();
             	$state.go('viewTestSuite');
             }
             function error(response) {
             	reset();
             }
            
            
        };
        
        $scope.saveTestCase = function () {
       	 $scope.testCaseModel.scenarioName = $scope.name;
            ProfileBasicFactory.createTestCaseData($scope.testCaseModel).then(success, error);
            function success(response) {
            	reset();
            	$state.go('viewTestCase');
            }
            function error(response) {
            	reset();
            }
           
           
       };
        
        
        
       
        
        $scope.testSuiteList = function () {
        	$state.go('viewTestSuite');
        	$scope.testSuitesList = [];
        	
        	
        	ProfileBasicFactory.getAllTestSuites().then(success,error);
        	function success(response) {
        		$scope.testSuitesList = response.data;
            }
            function error(response) {
            	
            }
            
        }
        
        $scope.testCaseList = function () {
        	
        	$scope.testCasesList = [];
        	
        	
        	ProfileBasicFactory.getAllTestCases().then(success,error);
        	function success(response) {
        		$scope.testCasesList = response.data;
        		$state.go('viewTestCase');
            }
            function error(response) {
            	
            }
            
        }

        $scope.cancelsaveProfile = function () {

        };

        function getBasicModel() {
        	
            ProfileBasicFactory.getUserProfileByUserId($scope.userId).then(success, error);
            function success(response) {
            	$scope.profileBasicModel = response.data; 
            	
            }
            function error(response) {
            	
            }
        };

        
    }
    TestSuiteController.$inject = ['$scope','ProfileBasicModel','ProfileBasicFactory','$sessionStorage','$state'];

})();

