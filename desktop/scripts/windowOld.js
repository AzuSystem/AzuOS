function newWindow(folder) {
	// Select an existing element where you want to add the HTML
	var desktop = document.getElementById("desktop");

	// Paste the HTML string into the innerHTML property of the container
	desktop.innerHTML = `
		<div id="window" class="window">
			<iframe src="apps/" + folder + "/index.html">
		</div>`
}