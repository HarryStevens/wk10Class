/**
 * @author Harry Stevens
 */

function modals() {
	$('.btn-cyclone').on("click", function() {
		$('.cyclone-body').html("<iframe width='100%' height='400px' src='http://www.youtube.com/embed/lxSCNto21mU?html5=1' frameborder='0' allowfullscreen>");
		$('#cycloneModal').modal();
	});
	$('.btn-wheel').on("click", function() {
		$('.wheel-body').html("<iframe width='100%' height='400px' src='http://www.youtube.com/embed/OK25N1Pw14w?html5=1' frameborder='0' allowfullscreen>");
		$('#wheelModal').modal();
	});
	$('.btn-para').on("click", function() {
		$('.para-body').html("<iframe width='100%' height='400px' src='http://www.youtube.com/embed/SIR0jxqfl4c?html5=1' frameborder='0' allowfullscreen>");
		$('#paraModal').modal();
	});
}

function closeVideo() {
	$('.close-window').on("click", function() {
		$('.modal-body').html("&nbsp;");
	});
}

$(document).ready(function() {
	modals();
	closeVideo();
});