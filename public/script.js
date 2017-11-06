/*global $*/
/*global firebase*/
//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
// Initialize Firebase
var config = {
	apiKey: "AIzaSyC69HbzFrEQwo8cJPMc2bG-FFjVYUZPpjs",
    authDomain: "my-portfolio-db681.firebaseapp.com",
    databaseURL: "https://my-portfolio-db681.firebaseio.com",
    projectId: "my-portfolio-db681",
    storageBucket: "my-portfolio-db681.appspot.com",
    messagingSenderId: "713457300475"
};
firebase.initializeApp(config);

var database = firebase.database();
var projects_ref = database.ref('/projects');

projects_ref.once('value', function(snapshot) {
	var projects = snapshot.val();
	for(var i in projects) {
		var div = $('<div>');
		var title = $('<h1>');
		var site_url = $('<a>');
		var image_url = $('<img>');
		title.attr('class', 'project-item');
		title.text(projects[i].title);
		site_url.attr('href', projects[i].site_url);
		site_url.attr('target', 'blank');
		image_url.attr('src', projects[i].image_url);
		site_url.append(image_url);
		div.append(title, site_url);
		$("#projects").append(div);
	}
    console.log(projects);
});
