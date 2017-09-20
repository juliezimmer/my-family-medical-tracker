medicalApp.controller('MedController', function (MedService, UserService) {
    console.log('MedController created');
    //"this" refers to the MedController
    var vm = this;
    vm.MedService = MedService;
    vm.userObject = UserService.userObject;
    vm.userMeds = MedService.userMedications;

    

    // vm.addMed = function (medObject) {
    //     console.log('addMed function was clicked:',medObject);
    //     MedService.addMed(medObject);
    // } 
    vm.getMeds = function () {
        console.log('getMed function has been accessed');
        MedService.getMed();
        console.log('user meds on controller: ', vm.userMeds);
    }

    vm.getMeds();

    vm.editMed = function () {
        console.log('editMed function was clicked:', vm.medObject);
        MedService.editMed(vm.medObject);
    }
}); 