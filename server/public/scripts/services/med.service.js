medicalApp.service('MedService', function ($http, $location) {
    console.log('MedService Loaded');
    //"this" refers to MedService
    var vm = this;
    vm.userMedications = [];
    //this came from the med controller
    // vm.addMed creates MedService.addMed
    vm.addMed = function (newMedication) {
        console.log('new med:', newMedication);
        $http({
            method: 'POST',
            url: '/meds',
            data: newMedication,
        }).then(function (response) {
            $location.path('/user');
            console.log('new med saved to db: ', response.data);
        })
        getMeds();
    }//end of addMed function/http POST request

     function getMeds() {
         $http({
             method: "GET",
             url: '/meds'
         }).then(function (response) {
             console.log('getting Meds for the user profile:' , response.data);
             vm.userMedication = response.data;
             
        });
     }
     
});