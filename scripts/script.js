function showModal() {
	var shadowLayer = document.getElementById('shadow')
	var modalWin = document.getElementById('popupWin');
	modalWin.style.display = shadowLayer.style.display = 'block';
	shadowLayer.onclick = function () {
		modalWin.style.display = shadowLayer.style.display = 'none';
		return false;
	};
}