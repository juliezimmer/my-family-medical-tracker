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
        console.log('user medications line 18 in med.controller.js:', vm.userMedications);
       
    }
    
    vm.getMeds();

    vm.openEdit = function (med) {
        console.log('openEdit function was clicked:', med);
        med.editMode = true;
    }

    vm.saveMedChanges = function(med){
        console.log('Inside saveMedChanges line  31 in med.controller.js:', med);
        MedService.saveMedChanges(med);
        med.editMode = false;
        vm.getMeds();
    }

    vm.deleteMed = function(medId){
        console.log('Inside deleteMed line 36 in med.controller.js:', medId);
        MedService.deleteMed(medId);
    }
    
}); 