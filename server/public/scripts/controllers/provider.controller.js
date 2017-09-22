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
        console.log('user providers line 15 in provider.controller.js:', vm.userProviders);
     }
    
     vm.getProviders();

    vm.openEdit = function(provider) {
        console.log('openEdit function was clicked on line 21 of provider.controller.js:' , provider);
        provider.editMode = true;
    }
    
    vm.saveProviderChanges = function(provider){
        console.log('Inside saveProviderChanges line  26 in provider.controller.js:', provider);
        ProviderService.saveProviderChanges(provider);
        provider.editMode = false;
        vm.getProviders();
    }

    vm.deleteProvider = function(providerId){
        console.log('Inside deleteProvider line 33 in provider.controller.js:', providerId);
        ProviderService.deleteProvider(providerId);
    }
});