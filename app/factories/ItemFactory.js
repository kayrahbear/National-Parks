"use strict";

app.factory("ParkStorage", function(FBCreds, $q, $http, AuthFactory) {

    let getAllParks = () => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/forests.json`)
            .then((itemObject) =>{
                let itemCollection = itemObject.data;
                Object.keys(itemCollection).forEach((key)=>{
                    itemCollection[key].id = key;
                    items.push(itemCollection[key]);
                });
                resolve(items);
            })
            .catch((error)=> {
                reject(error);
            });
        });
    };

    let getUserParks = (user) => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/visitor_favorites.json?orderBy="uid"&equalTo="${user}"`)
            .then((itemObject) =>{
                let itemCollection = itemObject.data;
                Object.keys(itemCollection).forEach((key)=>{
                    itemCollection[key].id = key;
                    items.push(itemCollection[key]);
                });
                resolve(items);
            })
            .catch((error)=> {
                reject(error);
            });
        });
    };


    let addFavorite = (selectedPark) => {
        return $q((resolve, reject)=>{
            $http.post(`${FBCreds.databaseURL}/visitor_favorites.json`,
                JSON.stringify(selectedPark))
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error)=>{
                    reject(error);
                });
            });
    };

    let deleteFavorite = (itemId) => {
        console.log("delete in factory", itemId);
        return $q((resolve, reject)=>{
            $http.delete(`${FBCreds.databaseURL}/visitor_favorites/${itemId}.json`)
            .then((ObjectFromFirebase) => {
                resolve(ObjectFromFirebase);
            });
        });
    };

    return {getAllParks, getUserParks, deleteFavorite, addFavorite};

});
