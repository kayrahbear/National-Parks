"use strict";

app.controller("AllParks", function($scope, ParkStorage, AuthFactory){

    ParkStorage.getAllParks()
    .then(function(itemCollection){
        $scope.parks = itemCollection;
    });
});
