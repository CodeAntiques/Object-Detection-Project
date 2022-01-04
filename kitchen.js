img="";
status="";
objects=[];
percentage=0;

function preload(){
  img=loadImage("kitchen.jpg");
}


function draw(){
  image(img,0,0,640,460);
if(status !=""){
 console.log(objects);
  for ( i = 0; i < objects.length; i++) {
     document.getElementById("status").innerHTML="Status:Object Detected";
     fill("red");
     percentage=floor(objects[i].confidence*100)
     text(objects[i].label + " " + percentage + " % ",objects[i].x+30,objects[i].y+30);
     noFill();
     stroke("red");
     rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
     console.log(objects.length);
  }
 }
}

function setup(){
  canvas=createCanvas(640,460);
  canvas.center();
  objectDetector=ml5.objectDetector("cocossd", modeloaded);
  document.getElementById("status").innerHTML="Status:Detecting Object";
  
}

function modeloaded(){
  console.log("Model has been loaded")
  status=true;
  objectDetector.detect(img,gotResults);
}


function gotResults(error,results){
  if (error) {
    console.error(error);
  }  
    console.log(results);
    objects=results;
  
}