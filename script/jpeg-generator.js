var fs = require('fs');
var imgGen = require('js-image-generator');

// Generate multiple images
for (var i = 1; i <= 10; i++) {
	imgGen.generateImage(800, 600, 80, function(err, image) {
		console.log('Generating image #' + i);
		fs.writeFileSync('dummy-' + i + '.jpg', image.data);
	});
}
