function vastaa() { // päivitetään vastaus
	document.getElementById("vastaus").innerHTML = parseInt(document.getElementById("hinta").value*document.getElementById("hauskuus").value/5000);
}

function hi_muuttui() { // käyttäjä liikutti
	document.getElementById("hinta_a").innerHTML = document.getElementById("hinta").value + " €";
	vastaa();
}

function ha_muuttui() { // käyttäjä liikutti
	document.getElementById("hauskuus_a").innerHTML = document.getElementById("hauskuus").value + " / 5";
	vastaa();
}

function tallenna() { // tallenna localstorageen
	localStorage.setItem("hinta", document.getElementById("hinta").value);
	localStorage.setItem("hauskuus", document.getElementById("hauskuus").value);
}

function poista() {
	localStorage.clear();
	document.getElementById("hinta").value = 5500;
	document.getElementById("hauskuus").value = 3;
	hi_muuttui();
	ha_muuttui();
}

window.addEventListener('load', function() {
	const hinta = localStorage.getItem("hinta");
	const hauskuus = localStorage.getItem("hauskuus");
	if (hinta && hauskuus) {
		document.getElementById("hinta").value = hinta;
		document.getElementById("hauskuus").value = hauskuus;
	}
	let hi = document.getElementById("hinta");
	hi.addEventListener('input', hi_muuttui, false);
	hi.addEventListener('change', tallenna, false);
	let ha = document.getElementById("hauskuus");
	ha.addEventListener('input', ha_muuttui, false);
	ha.addEventListener('change', tallenna, false);
	hi_muuttui();
	ha_muuttui();
	document.getElementById("unohda").addEventListener("click", poista);
});