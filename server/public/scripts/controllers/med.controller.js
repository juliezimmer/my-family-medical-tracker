medicalApp.controller('MedController', function (MedService, UserService) {
    console.log('MedController created');
    //"this" refers to the MedController
    var vm = this;
    vm.MedService = MedService;
    vm.userObject = UserService.userObject;
    vm.userMeds = MedService.userMedications;

    // vm.addMed = function (medObject) {
    //     console.log('addMed function was clicked:',medObject);
    //     MedService.addMed(medObject);
    // } 
    vm.getMeds = function () {
        console.log('getMed function has been accessed');
        MedService.getMed();
        console.log('user medications line 18 in med.controller.js:', vm.userMedications);
       
    }
    
    vm.getMeds();

    vm.openEdit = function (med) {
        console.log('openEdit function was clicked:', med);
        med.editMode = true;
    }
    //for when changes or updates are made to an existing current medication
    vm.saveMedChanges = function(med){
        console.log('Inside saveMedChanges line  31 in med.controller.js:', med);
        //this moves the code to the med.service.js file and runs the saveMedChanges function in that file
        MedService.saveMedChanges(med);
        /* this is related to med.editMode = true; in the vm.openEdit = function on line 22.
           When med.editMode is true, the med is being edited and the Save Changes button appears and is active. 
           When it is false, the Save Changes button  disappears, editing is complete and the changes can be saved.*/
        med.editMode = false; /* editing is done, it's time to save changes and remove the Save Changes button. The Save Changes button has been clicked. */
        /* this calls the getMeds() function, which returns the updated med and all other current meds to the DOM to display in the Current Medications section */
        vm.getMeds();
    }

    vm.deleteMed = function(medId){
        console.log('Inside deleteMed line 36 in med.controller.js:', medId);
        //this moves the code into the med.service.js file and runs the deleteMed function
        MedService.deleteMed(medId);
    }
    
}); 