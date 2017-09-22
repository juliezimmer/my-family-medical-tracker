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
        vm.getMed();
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

    vm.saveMedChanges = function(med) {
        console.log('updated med:', med);
        $http({
            method: 'PUT',
            url:'/meds',
            data: med,
        }).then(function(response){
            $location.path('/user');/* this line of code keeps the user on the profile page,  user.html */
            console.log(' med changes saved to db: ', response.data);
        });//end function callback with response
    }
    vm.deleteMed = function(medId){
        console.log('deleted med:', medId);
            $http.delete('/meds/' + medId).then(function(response){
            $location.path('/user');
            console.log(' med deleted from DB on line 49 of med.service.js:', response);
            vm.getMed();
        });//end $http 'PUT' request
    }
});