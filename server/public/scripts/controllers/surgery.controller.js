medicalApp.controller('SurgeryController', function(MedService, UserService) {/*not sure which services to bring into this controller */
    console.log('SurgeryController created');
    //"this" refers to the SurgeryController
    var vm = this;
    vm.MedService = MedService;
    vm.userObject = UserService.userObject;
    // 
    vm.addMed = function (medObject) {
        console.log('addMed function was clicked:', medObject);
        MedService.addMed(medObject);
    }

    vm.getMed = function() {
         console.log('getMed function has been accessed');
         MedService.getMed(vm.medObject);
     }

    vm.editMed = function() {
        console.log('editMed function was clicked:' , vm.medObject);
        MedService.editMed(vm.medObject);
    }
});