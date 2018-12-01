

resemble('demoassets/People.jpg').compareTo('demoassets/People2.jpg').onComplete(onComplete);

function onComplete(data) {
	var diffImage = new Image();
	diffImage.src = data.getImageDataUrl();	

	$(diffImage).click(function(){
		var w = window.open("about:blank", "_blank");
		var html = w.document.documentElement;
		var body = w.document.body;

		html.style.margin = 0;
		html.style.padding = 0;
		body.style.margin = 0;
		body.style.padding = 0;

		var img = w.document.createElement("img");
		img.src = diffImage.src;
		img.alt = "image diff";
		img.style.maxWidth = "100%";
		img.addEventListener("click", function() {
			this.style.maxWidth = this.style.maxWidth === "100%" ? "" : "100%";
		});
		body.appendChild(img);
	});
}

$('#image-diff').html(diffImage);