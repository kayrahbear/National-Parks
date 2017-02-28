"use strict";

app.controller("OnePark", function ($scope, $routeParams, ParkStorage, AuthFactory){
    let user = AuthFactory.getUser();

    ParkStorage.getAllParks()
    .then(function(itemCollection){
        $scope.parks = itemCollection;

    $scope.selectedPark = $scope.parks.filter(function(park){
        return park.id === $routeParams.itemId;
    })[0];

    $scope.addFavoritePark = function(){
        $scope.newFavoritePark = $scope.selectedPark;
        $scope.newFavoritePark.uid = user;
        console.log("Did it work?", $scope.newFavoritePark);
        ParkStorage.addFavorite($scope.newFavoritePark);
    };

});
});
