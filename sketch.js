function setup() {
  createCanvas(windowWidth, windowHeight);
  background(233, 211, 10);
  fill(22, 21, 25);
  stroke(22, 21, 25);

  // draw a column of rows of little circles
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) ellipse(x, y, 10, 10);
  }

  // draw a column of rows of big circles
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) ellipse(x, y, 25, 25);
  }

  // draw a second column of rows of big circles
  translate(50, 50);
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) ellipse(x, y, 25, 25);
  }
}
