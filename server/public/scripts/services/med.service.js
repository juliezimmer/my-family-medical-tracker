medicalApp.service('MedService', function($http, $location){
    console.log('MedService Loaded');
    var vm = this;
    var medObject = {};

    //this came from the med controller
    vm.addMed = function(newMed) {
        console.log('new med:', newMed);
        $http({
           method: 'POST',
           url: '/meds',
           data: newMed, 
        }).then(function(response){
            vm.getNewMed();
        })
    }//end of addMed function/http POST request

    /*vm.getMed = function() {
        $http({
            method: "GET",
            url: '/meds',
        }).then(function(response) {

        }*/
    });