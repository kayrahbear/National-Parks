"use strict";

app.controller("FavoriteParks", function($scope, ParkStorage, AuthFactory){
    let user = AuthFactory.getUser();

    ParkStorage.getUserParks(user)
    .then(function(itemCollection){
        $scope.favoriteParks = itemCollection;
        console.log("WTF?!?!", $scope.favoriteParks);
    });

    $scope.itemDelete = function(itemId){
        console.log("delete this item", itemId);
        ParkStorage.deleteFavorite(itemId)
        .then(function(response){
            ParkStorage.getUserParks(user).then(function(itemCollection){
                $scope.items = itemCollection;
            });
        });
    };

});
