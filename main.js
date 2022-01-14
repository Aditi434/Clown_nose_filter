noseX = 0;
noseY = 0;
function preload()
{
    //clownnose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    video.center();

    posenet = ml5.poseNet(video, ModelLoaded);
    posenet.on('pose', gotPoses);
}
function ModelLoaded()
{
    console.log("Posenet has been intialised");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("length");
        console.log("nose x" + results[0].pose.nose.x);
        console.log("nose y" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw()
{
    image(video, 0, 0, 300, 300);
    //image(clownnose, noseX, noseY, 30, 30);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
}
function take_snapshot()
{
    save('picture');
}