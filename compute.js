img = "";
status1 = "";
objects = [];

function preload()
{
img = loadImage("compute.jpg");    
}

function setup()
{
canvas = createCanvas(500,300);
canvas.position(460,250);
objd = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("Object").innerHTML = "Object status: Started to detect objects."
}

function draw()
{
image(img, 0, 0, 500, 300);
if(status1 != "") {
stroke("red");
noFill();
for(var i=0; i<=objects.length; i++) {
document.getElementById("Object").innerHTML = "Object status: Objects have been detected";
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
per = Math.floor(objects[i].confidence * 100);
text(objects[i].label+" "+per+"%", objects[i].x, objects[i].y-15);
}

}
}

function modelLoaded()
{
    console.log("Model has been loaded");
    status1 = "true";
    objd.detect(img, gotResults);
}

function gotResults(error, results)
{
if(error)
{
    console.log(error);
}

else
{
    console.log(results);
    objects = results;
}
}

function back()
{
    window.location = "index.html";
}