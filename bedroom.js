statuss = "";
img = "";
objects = [];


function preload() {
img = loadImage("C131_Project_Image1.jpg");
}

function setup() {
    canvas = createCanvas (640, 420);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
        image(img, 0, 0, 640, 420);
        if(statuss != "") {
            for(i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status : Object Detected";
    
                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                document.getElementById("objectamount").innerHTML = "There are around 6 items in this image, of which only 3 are identified, in the wrong areas."
    
            }
        }
}

function modelLoaded() {
    console.log("Model Loaded");
    statuss = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function toMain() {
    window.location = "index.html";
    console.log("To Main page")
}