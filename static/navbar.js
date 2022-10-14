window.addEventListener('load', function() {
	document.getElementById(window.location.pathname.split("/").pop().split(".")[0]).style.borderBottom = "5px solid #0000ff";
});