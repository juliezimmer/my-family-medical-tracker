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

     vm.openEdit =function(surgery){
         console.log('openSurgery function was clicked/line 23 surgery.controller:' , surgery);
         surgery.editMode = true;
     }

    vm.saveSurgeryChanges = function(surgery) {
        console.log('Inside saveSurgeryChanges line  28 in surgery.controller.js:', surgery);
        SurgeryService.saveSurgeryChanges(surgery);
        surgery.editMode = false;
        vm.getSurgeries();
    }

    vm.deleteSurgery = function(surgeryId) {
        console.log('Inside deleteSurgery line 35 in surgery.controller.js:', surgeryId);
        SurgeryService.deleteSurgery(surgeryId);
    }
});