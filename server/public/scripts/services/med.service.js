medicalApp.service('MedService', function ($http, $location) {
    console.log('MedService Loaded');
    //"this" refers to MedService
    var vm = this;

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
    }//end of addMed function/http POST request

     vm.getMed = function () {
         $http({
             method: "GET",
             url: '/meds'
         }).then(function (response) {
             console.log('')
         });
     }
});