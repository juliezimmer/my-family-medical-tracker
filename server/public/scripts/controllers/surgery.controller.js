medicalApp.controller('SurgeryController', function(SurgeryService, UserService) {/*not sure which services to bring into this controller */
    console.log('SurgeryController created');
    //"this" refers to the SurgeryController
    var vm = this;
    vm.SurgeryService = SurgeryService;
    vm.userObject = UserService.userObject;
    vm.userSurgeries = SurgeryService.userSurgeries;
    
    /* vm.addMed = function (medObject) {
        console.log('addMed function was clicked:', medObject);
        MedService.addMed(medObject);
    } */

    vm.getSurgeries = function() {
         console.log('getSurgeries function has been accessed');
         SurgeryService.getSurgery();
         console.log('surgeries on the controller:', vm.userSurgeries);
     }

     vm.getSurgeries();

    vm.editSurgery = function() {
        console.log('editSurgery function was clicked:' , vm.surgeryObject);
        SurgeryService.editSurgery(vm.surgeryObject);
    }
});