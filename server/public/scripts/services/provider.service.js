medicalApp.service('ProviderService', function ($http, $location) {
    console.log('ProviderService Loaded');
    //"this" refers to MedService
    var vm = this;
    vm.userProviders = { list: [] };
    //this came from the provider controller
    // vm.addProvider creates ProviderService.addProvider
    vm.addProvider = function (newProvider) {
        console.log('new provider:', newProvider);
        $http({
            method: 'POST',
            url: '/provider',
            data: newProvider,
        }).then(function (response) {
            $location.path('/user');/* this line of code takes the user back to the user profile page, user.html */
            console.log('new provider saved to db: ', response.data);
        })
        getProvider();
    }//end of addProvider function/http POST request

    //vm.getProvider creates ProviderService.getProvider
    vm.getProvider = function () {
        $http({
            method: "GET",
            url: '/provider'
        }).then(function (response) {
            vm.userProviders.list = response.data;
            console.log('service getting Providers for the user profile:', vm.userProviders);
        });
    }
    vm.saveProviderChanges = function (provider) {
        console.log('updated provider:', provider);
        $http({
            method: 'PUT',
            url: '/provider',
            data: provider,
        }).then(function (response) {
            $location.path('/user');/* this line of code takes the user back to the user profile page, user.html */
            console.log(' provider changes saved to db: ', response.data);
        });
    }
    vm.deleteProvider = function(providerId){
        console.log('deleted provider:', providerId);
            $http.delete('/provider/' + providerId).then(function(response){
            $location.path('/user');
            console.log(' provider deleted from DB on line 51 of provider.service.js:', response);
            vm.getProvider();
        });
    }
});