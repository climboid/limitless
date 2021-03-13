var Clipper = require('image-clipper');
var Canvas = require('canvas');
var clipper = Clipper();

Clipper('/images/15.jpeg', function() {
    this.crop(20, 20, 100, 100)
    .resize(480, 50)
    .quality(80)
    .toFile('/images/15-480w.jpg', function() {
       console.log('saved!');
   });
});
