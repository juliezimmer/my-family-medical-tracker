medicalApp.controller('MedController', function(MedService, UserService) {
    console.log('MedController created');
    //"this" refers to the MedController
    var vm = this;
    vm.MedService = MedService;
    vm.userObject = UserService.userObject;
    });
    // 
    // vm.addMed = function (medObject) {
    //     console.log('addMed function was clicked:', medObject);
    //     MedService.addMed(medObject);
    // } 

    /*vm.getMed = function() {
         console.log('getMed function has been accessed');
         MedService.getMed(vm.medObject);
     }

    vm.editMed = function() {
        console.log('editMed function was clicked:' , vm.medObject);
        MedService.editMed(vm.medObject);
    }
}); */