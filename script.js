$(function () {
	$(".navbar-toggler").blur(function (event){
		var size = window.innerWidth;
		if(size < 768){
			$("#navbarCollapse").collapse('hide');
		}
	});
});
function say(){
	var name = document.getElementById("names").value;
	var msg = "Welcome "+ name +"!";
	document.getElementById("context").textContent = msg;
};
