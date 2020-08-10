$(function () {
	$(".navbar-toggler").blur(function (event){
		var size = window.innerWidth;
		if(size < 768){
			$("#navbarCollapse").collapse('hide');
		}
	});
});

(function (global){
	var dc = {};
	var hhtml = "grp/home.html";
	var inserthhmtl = function (selector , html) {
		var targete = document.querySelector(selector);
		targete.innerHTML = hhtml;
	};

	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='ajax-loader.gif'></div>";
		inserthhmtl(selector, html);
	};
	document.addEventListener("DOMContentLoaded", function(event){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			hhtml, function(responseText){
				document.querySelector("#main-content").innerHTML = responseText;
			},false);
	});	
	global.$dc = dc;
})(window);