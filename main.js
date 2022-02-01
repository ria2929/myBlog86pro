const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL('BirthdayImage.jpg', function (img){
        block_image_object = img;

        block_image_object.scaleWidth(700);
        block_image_object.scaleheight(510);
        block_image_object.set({
            top:0,
            left:0
         });
         canvss.add(block_image_object);
	});

function playSound(){
      x.play();
}

fabric.Image.fromURL(get_image, function(Img)


block_image_object.set({
    top:0,
    left:0
});

canvas.add(block_image_object);