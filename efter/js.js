$(document).ready(function () {
	$('.dropdown-btn').click(function(){
	var e = document.getElementById('menu');
	if(e.style.display == 'block'){
		e.style.display = 'none';
	}
	else
	e.style.display = 'block';
	});

	document.getElementById('home').onclick = function(){ scroller('parallax-img')};
	document.getElementById('infoButton').onclick = function(){ scroller('info')};
	document.getElementById('stabenButton').onclick = function(){ scroller('staben')};
	document.getElementById('schemaButton').onclick = function(){ scroller('schema')};
	document.getElementById('nolleguidenButton').onclick = function(){ scroller('nolleguiden')};
	document.getElementById('sponsorerButton').onclick = function(){ scroller('sponsorer')};
	document.getElementById('buttonScroll').onclick = function(){ scroller('info')};

	function scroller(name) {
		var element = document.getElementById(name);
		element.scrollIntoView({behavior: 'smooth'});
	}

});