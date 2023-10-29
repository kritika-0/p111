//https://teachablemachine.withgoogle.com/models/SLzfNMSZR/model.json

Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});

camera=document.getElementById('camera');
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5.version: ', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SLzfNMSZR/model.json",modelReady);

function modelReady()
{
  console.log("model ready");  
}

function speak()
{ 
   synth=window.speechSynthesis;
   speakdata1="First prediction is "+prediction_1;
   var utterThis=new SpeechSynthesisUtterance(speakdata1);
   synth.speak(utterThis);
}