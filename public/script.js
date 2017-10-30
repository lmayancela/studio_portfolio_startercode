//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

firebase.initializeApp(config);

var database = firebase.database();
var projects_ref = database.ref('/projects');

projects_ref.once('value', function(snapshot) {
	var projects = snapshot.val();
	console.log(projects);
});
