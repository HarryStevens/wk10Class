/**
 * @author Harry Stevens
 */

// This object called "modalContent" contains all the content that will go into the bodies of the modals.
// The name of each property is a string that corresponds to id's in the markup. 
// The value of each property is a string with the HTML in the form of iframes.
var modalContent = {
	"cycloneMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/lxSCNto21mU?html5=1' frameborder='0' allowfullscreen>",
	"wheelMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/OK25N1Pw14w?html5=1' frameborder='0' allowfullscreen>",
	"paraMod":"<iframe width='100%' height='400px' src='http://www.youtube.com/embed/SIR0jxqfl4c?html5=1' frameborder='0' allowfullscreen>"
};

// This function is called when the document is ready. It populates the body of the modals and launches them according to the button id that gets clicked.
// It also replaces the video content with an empty space when the modal is closed so that the audio from the video stops playing when the modal is closed.
function modals() {
	// When anything with the class "btn-modal" is clicked, this knows the id of the particular button that got clicked, 
	// populates the right modal body with the content from var modalContent, and opens the corresponding modal.
	$('.btn-modal').on("click", function(e) {
		var btnModalID = e.target.id;
		$('#'+btnModalID+'Content').html(modalContent[btnModalID]);
		$('#'+btnModalID+'Modal').modal();
	});
	// When anything with the class "close-window" is clicked, the modal body will be replaced with an empty space just as the modal closes.
	$('.close-window').on("click", function() {
		$('.modal-body').html("&nbsp;");
	});
}

// When everything is loaded, call the function "modals".
$(document).ready(function() {
	modals();
});