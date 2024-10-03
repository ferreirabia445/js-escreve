function setup() {
  createCanvas(500, 500);
  background("pink");
}

function draw() {
  stroke("white");
  fill("blue");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
