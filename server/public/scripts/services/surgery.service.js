medicalApp.service('SurgeryService', function ($http, $location) {
    console.log('SurgeryService Loaded');
    //"this" refers to MedService
    var vm = this;
    vm.userSurgeries = { list: [] };
    //this came from the surgery controller
    // vm.addSurgery creates SurgeryService.addSurgery
    vm.addSurgery = function (newSurgery) {
        console.log('new surgery:', newSurgery);
        $http({
            method: 'POST',
            url: '/surgery',
            data: newSurgery,
        }).then(function (response) {
            $location.path('/user');
            console.log('new surgery saved to db: ', response.data);
        })
        getSurgeries();
    }//end of addSurgery function/http POST request

    //vm.getSurgery creates MedService.getMed
    vm.getSurgery = function () {
        $http({
            method: "GET",
            url: '/surgery'
        }).then(function (response) {
            vm.userSurgeries.list = response.data; 
            console.log('service getting Surgeries for the user profile:', vm.userSurgeries);
        });
    }

});
