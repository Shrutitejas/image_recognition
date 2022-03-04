Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="object_img">';
    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wi2dDqyC8/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model is ready");
}

function check(){
    img = document.getElementById("object_img");
    classifier.classify(img, gotresult);
}
function gotresult(error, result){
    if (error) {
        console.error(Error);
    } 
    else {
        document.getElementById("objectname").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(4);
    }
}