(() => {
	console.log('svg script file');

	let svgs = document.querySelectorAll('svg');

	function logThisSVG(){
		console.log(this.id);
	}
	

	function zoom(){
		document.querySelector(`#${this.id}`).classList.add('zoom');
	}

	function removeZoom(){
		document.querySelector(`#${this.id}`).classList.remove('zoom');
	}
	

	svgs.forEach(svg => svg.addEventListener('click', logThisSVG));
	svgs.forEach(svg => svg.addEventListener('mouseover', zoom));
	svgs.forEach(svg => svg.addEventListener('mouseout', removeZoom));

})();