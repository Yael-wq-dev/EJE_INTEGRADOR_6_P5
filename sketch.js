let faceMesh;
let video;
let faces = [];
let options = {
  maxFaces: 1,
  refineLandmarks: false,
  flipHorizontal: false
};

let triangles;

function preload() {
 
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);


  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  triangles = faceMesh.getTriangles();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {

  image(video, 0, 0, width, height);

  for (let i = 0; i < faces.length; i++) {

    let face = faces[i];
    for (let j = 0; j < triangles.length; j++) {

      let indices = triangles[j];

      let pointAIndex = indices[0];
      let pointBIndex = indices[1];
      let pointCIndex = indices[2];

      let pointA = face.keypoints[pointAIndex];
      let pointB = face.keypoints[pointBIndex];
      let pointC = face.keypoints[pointCIndex];

      noFill();
<<<<<<< HEAD
      stroke(0);
      strokeWeight(0.25);
      triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y);
      circle(pointA.x,pointA.y,10);
=======
      stroke(0, 0, 0);
      strokeWeight(0);

      triangle(
        pointA.x, pointA.y,
        pointB.x, pointB.y,
        pointC.x, pointC.y
      );
>>>>>>> a9f15f3a7978db6635eb581abfce779623af46d9
    }

    let nariz = face.keypoints[5];

    fill(255, 0, 0); // rojo
    noStroke();
    circle(nariz.x, nariz.y, 20);
  }
}

function gotFaces(results) {
<<<<<<< HEAD
  // Save the output to the faces variable s 
=======
>>>>>>> a9f15f3a7978db6635eb581abfce779623af46d9
  faces = results;
}