"use strict";

var app = angular.module("NationalParks",["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
	AuthFactory.isAuthenticated()
	.then ( (userExists) => {
    console.log("userExists", userExists);
		if (userExists){
      console.log("Hey user!");
			resolve();
		}else {
      console.log("You can't go there. Stop that.");
			reject();
		}
	});
});

app.config(function($routeProvider){
    $routeProvider.
    when("/", {
        templateUrl: "partials/login.html",
        controller: "UserCtrl"
    }).
    when("/login", {
        templateUrl: "partials/login.html",
        controller: "UserCtrl"
    }).
    when("/logout", {
        templateUrl: "partials/login.html",
        controller: "UserCtrl"
    }).
    when("/parks", {
        templateUrl: "partials/parkslist.html",
        controller: "AllParks"
    }).
	when("/parks/myfavorites", {
		templateUrl: "partials/favoriteParks.html",
		controller: "FavoriteParks"
	}).
	when("/parks/:itemId", {
		templateUrl: "partials/park-details.html",
		controller: "OnePark"
	}).
    otherwise("/");
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
	};
	firebase.initializeApp(authConfig);
});
