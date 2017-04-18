/**
 * Created by bhandr1 on 5/13/2016.
 */


(function () {
    angular.module('app.tapi').controller('TestCaseController',TestCaseController);

    function TestCaseController($scope,TestCaseModel,TestCaseBasicFactory,$sessionStorage,$state){

        init();

        function init() {
            initModels();
           
           
                $scope.testCasesList = [];
            	
            	
                TestCaseBasicFactory.getAllTestCases().then(success,error);
            	function success(response) {
            		$scope.testCasesList = response.data;
                }
                function error(response) {
                	
                }
                
            
        }

        function initModels() {
            
        	
        	$scope.testCaseModel = TestCaseModel.newTestCaseModel();
        }
        function reset() {
        	$scope.name = "";
        	$scope.testCasesList = "";
        }


        
        
        
        $scope.createTestCase = function () {
        	$state.go('createTestCase');
        };
        
       
        
        $scope.saveTestCase = function () {
       	 $scope.testCaseModel.scenarioName = $scope.name;
       	TestCaseBasicFactory.createTestCaseData($scope.testCaseModel).then(success, error);
            function success(response) {
            	reset();
            	$state.go('viewTestCase');
            }
            function error(response) {
            	reset();
            }
           
           
       };
        
        
        
       
        
      
        
        $scope.testCaseList = function () {
        	
        	$scope.testCasesList = [];
        	
        	
        	TestCaseBasicFactory.getAllTestCases().then(success,error);
        	function success(response) {
        		$scope.testCasesList = response.data;
        		$state.go('viewTestCase');
            }
            function error(response) {
            	
            }
            
        }

        

        

        
    }
    TestCaseController.$inject = ['$scope','TestCaseModel','TestCaseBasicFactory','$sessionStorage','$state'];

})();

