medicalApp.service('SurgeryService', function ($http, $location) {
    console.log('SurgeryService Loaded');
    //"this" refers to SurgeryService
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
        vm.getSurgery();
    }//end of addSurgery function/http POST request

    //vm.getSurgery creates SurgeryService.getSurgery
    vm.getSurgery = function () {
        $http({
            method: "GET",
            url: '/surgery'
        }).then(function (response) {
            vm.userSurgeries.list = response.data; 
            console.log('service getting Surgeries for the user profile:', vm.userSurgeries);
        });
    }
    vm.saveSurgeryChanges = function(surgery) {
        console.log('updated provider:', surgery);
        $http({
            method: 'PUT',
            url: '/surgery',
            data: surgery,
        }).then(function(response){
            $location.path('/user');/*routes the user to stay on the user.html view */
            console.log(' surgery changes saved to db in surgery.service.js:', response.data);
        });
    }

    vm.deleteSurgery = function (surgeryId) {
        console.log('deleted surgery:', surgeryId);
        $http.delete('/surgery/' + surgeryId).then(function(response){
        $location.path('/user');
        console.log('surgery deleted from DB on line 47 of surgery.service.js:', response);
        vm.getSurgery();
        })
    }
});
