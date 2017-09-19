medicalApp.controller('ProviderController', function(MedService, UserService) { /*not sure which services I should include in this controller */
    //"this" refers to the HcpController
    var vm = this;
    //Not sure which services should be here or defined
    //vm.MedService = MedService;
    //vm.userObject = UserService.userObject;
     
    vm.addProvider = function (providerObject) {
        console.log('addProvider function was clicked:', providerObject);
        //ProviderService.addProvider(providerObject); ?????
    }

    vm.getProvider = function() {
         console.log('getProvider function has been accessed');
         //ProviderService.getProvider(vm.providerObject); ?????
     }

    vm.editProvider = function() {
        console.log('editProvider function was clicked:' , vm.providerObject);
        //ProviderService.editProvider(vm.providerObject); ?????
    }
});