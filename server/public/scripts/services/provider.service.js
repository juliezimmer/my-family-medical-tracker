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
        getProviders();
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

});