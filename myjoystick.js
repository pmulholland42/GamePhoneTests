var canvas;
var c;
var container;
var mouseX;
var mouseY;
var touchable = 'createTouch' in document;
var touches =[];

setupCanvas();

setInterval(draw, 1000/35);

function setupCanvas(){
    canvas = document.createElement( 'canvas' );
	c = canvas.getContext( '2d' );
	container = document.createElement( 'div' );
	container.className = "container";

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild( container );
	container.appendChild(canvas);

	c.strokeStyle = "#ffffff";
	c.lineWidth = 2;
}//setupCanvas

if(touchable) {
	canvas.addEventListener( 'touchstart', onTouchStart, false );
	canvas.addEventListener( 'touchmove', onTouchMove, false );
	canvas.addEventListener( 'touchend', onTouchEnd, false );
	window.onorientationchange = resetCanvas;
	window.onresize = resetCanvas;
} else {
	canvas.addEventListener( 'mousemove', onMouseMove, false );
}

function resetCanvas (e) {
 	// resize the canvas - but remember - this clears the canvas too.
  	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	//make sure we scroll to the top left.
	window.scrollTo(0,0);
}

function init(){

}//init

function draw(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    if(touchable){
        for(var i=0; i<touches.length; i++){
            var touch = touches[i];
			c.beginPath();
			c.fillStyle = "white";
			c.fillText("touch id : "+touch.identifier+" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30);

			c.beginPath();
			c.strokeStyle = "cyan";
			c.lineWidth = "6";
			c.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true);
			c.stroke();
        }//for
    } else{
        // var touch = touches[i];
		// 	c.beginPath();
		// 	c.fillStyle = "white";
		// 	c.fillText("touch id : "+touch.identifier+" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30);
        //
		// 	c.beginPath();
		// 	c.strokeStyle = "cyan";
		// 	c.lineWidth = "6";
		// 	c.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true);
		// 	c.stroke();

        c.fillStyle	 = "white";
		c.fillText("mouse : "+mouseX+", "+mouseY, mouseX, mouseY);
    }
}//draw

function onTouchStart(e) {
	touches = e.touches;
}//onTouchStart

function onTouchMove(e) {
	e.preventDefault();
	touches = e.touches;
}//onTouchMove

function onTouchEnd(e) {
   	touches = e.touches;
}//onTouchEnd

function onMouseMove(event) {
	mouseX = event.offsetX;
	mouseY = event.offsetY;
}//onMouseMove
