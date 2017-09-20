medicalApp.controller('ProviderController', function(ProviderService, UserService) { 
    console.log("ProviderController created");
    //"this" refers to the ProviderController
    var vm = this;
    vm.ProviderService = ProviderService;
    vm.userObject = UserService.userObject;
    vm.userProviders = ProviderService.userProviders; 
     
    /* vm.addProvider = function (providerObject) {
        console.log('addProvider function was clicked:', providerObject);
    } */
    vm.getProviders = function() {
         console.log('getProvider function has been accessed');
        ProviderService.getProvider();
        console.log('user providers on controller', vm.userProviders);
     }
    
     vm.getProviders();


    vm.editProvider = function() {
        console.log('editProvider function was clicked:' , vm.providerObject);
        ProviderService.editProvider(vm.providerObject);
    }
});