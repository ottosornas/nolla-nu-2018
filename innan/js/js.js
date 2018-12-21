$(document).ready(function () {
	$('.dropdown-btn').click(function(){
	var e = document.getElementById('menu');
	if(e.style.display == 'block'){
		e.style.display = 'none';
	}
	else
	e.style.display = 'block';
	});
});