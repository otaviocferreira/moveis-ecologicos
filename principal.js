var banners = 
	["Os melhores do Brasil!", "Qualidade e pre�o baixo!"];
var bannerAtual = 0;

function() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = 
		banners[bannerAtual];
}

setInterval(trocaBanner, 1000);