## Requirements
18
19	### Firebase
20
21	1. Create a Firebase collection named `forests`
22	1. Create a Firebase collection named `visitors`
23	1. Create a Firebase collection named `visitor_favorites`
24	1. Use the basic Firebase email/password authentication to register users for your application.
25
26	You determine the structure of each object in the `forests` collection. At the very minimum, it should have a `name` and `description` property. Use the Firebase console, Postman, CURL, or whatever method you like to get data inserted for each of the collection.
27
28	The `visitors` collection is for storing information about the users that register for your application. When a user registers, their unique id should be stored in the `visitors` collection.
29
30	The structure of the `visitor_favorites` collection should be as follows.
31
32	```js
33	"{firebase_unique_identifier}" :{
34	    "forest": "{the unique identifier of a forest",
35	    "visitor": "{the unique identifier of a visitor"
36	}
37	```
38
39	### Application
40
41	1. Create an Angular application module.
42	1. Create 4 partials for views.
43	    1. A registration view
44	    1. A login view
45	    1. A forest listing view
46	    1. A forest detail view
47	1. Configure your application to support the following routes.
48	    1. `/register`
49	    1. `/login`
50	    1. `/forests`
51	    1. `/forests/favorite`
52	    1. `/forest/:id`
53	1. Write a controller for each of the partials
54	1. Write a factory for getting forest related information that the controller for the list view, and the detail view, can both use. It should return an object with at least two functions on it - `getForests()` and `getForest(id)`. There may be more functions needed. Remember to use the `orderBy` and `equalTo` parameters on the request to get single forest.
55	1. Write a factory that handles all authentication methods for your application. Both the registration controller and the logic controller should use it.
56
57	### Forest Details
58
59	Display the name and description of the forest - and any other details you are storing - as well as an affordance for the user to favorite the forest, indicating that it will be visited in the future.
60
61	### Favorites
62
63	When the user visits the `/forests/favorite` URL, the user should see all of the forests that were favorited. There should be a function returned from the forest factory that queries the `visitor_favorites` collection, and uses the `orderBy` and `equalTo` parameters to only return items created by the current user.
64
65
66	
