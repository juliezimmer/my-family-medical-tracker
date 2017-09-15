medicalApp.controller('MedController', function(MedService) {
    console.log('MedController created');

    var vm = this;
    vm.MedService = MedService;
    vm.addMed = function () {
        console.log('addMed function was clicked:', vm.medObject);
        MedService.getMed(vm.medObject);
    }

    vm.editMed = function() {
        console.log('editMed function was clicked:' , vm.medObject);
        MedService.editMed(vm.medObject);
    }
});