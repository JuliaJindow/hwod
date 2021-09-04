var status = "";

function preload() {
    img = loadImage("calender.jpg");
}

function setup() {
    canvas = createCanvas(640,400);
    canvas.center();
    ObjectD = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("The model is loaded!!");
    status = true;
    ObjectD.detect(img, gotResult);
}

function gotResult(error, results){
if (results){
console.log(results);
}
else{
console.error(error);
}
}