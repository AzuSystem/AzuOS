const toast = document.getElementById('daToast');

function notImplemented() {
	toast.style.display = 'flex';
	toast.style.transform = 'translateY(-50%)';
	var delayInMilliseconds = 2000;
		setTimeout(function() {
			toast.style.display = 'none';
		}, delayInMilliseconds);
}