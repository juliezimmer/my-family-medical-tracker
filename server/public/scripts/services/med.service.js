medicalApp.service('MedService', function ($http, $location) {
    console.log('MedService Loaded');
    //"this" refers to MedService
    var vm = this;
    vm.userMedications = { list: [] };
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

    //vm.getMed creates MedService.getMed
    vm.getMed = function () {
        $http({
            method: "GET",
            url: '/meds'
        }).then(function (response) {
            vm.userMedications.list = response.data; 
            console.log('service getting Meds for the user profile:', vm.userMedications);
        });
    }

});