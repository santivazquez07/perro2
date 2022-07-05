nose_x = 0;
nose_y = 0;
function preload(){
    perro = loadImage('https://i.postimg.cc/X7YLJ2S1/Nariz-perro.png');
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture (VIDEO);
    video.size (400, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results [0].pose.nose.x - 65;
        nose_y = results [0].pose.nose.y - 55;
        console.log("nose x" + nose_x);
        console.log("nose y" + nose_y);
    }
}

function modelLoaded(){
    console.log("poseNet esta inicializado");
}

function draw(){
    image(video, 0, 0, 400, 350);
    image(perro, nose_x, nose_y, 120, 120);
}
function take_snapshot(){
    save('nariz.png');
}



