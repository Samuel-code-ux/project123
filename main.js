function setup(){
    canvas = createCanvas(550,500)
    canvas.position(600,100)

    video = createCapture(VIDEO)
    video.size(550,550)
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('moldel loaded')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +"noseY ="+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX-rightWristX;
        }
}