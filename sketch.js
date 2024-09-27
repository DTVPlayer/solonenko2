let gameChar_x = 100;
let gameChar_y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Standing front facing
  let standBoxX = 50;
  let standBoxY = 150;
  rect(standBoxX, standBoxY, 50, 100); // Body
  ellipse(standBoxX + 25, standBoxY - 20, 50, 50); // Head
  
  // Jumping facing forwards
  let jumpBoxX = 150;
  let jumpBoxY = 100;
  rect(jumpBoxX, jumpBoxY, 50, 100); // Body
  ellipse(jumpBoxX + 25, jumpBoxY - 30, 50, 50); // Head
  line(jumpBoxX, jumpBoxY + 100, jumpBoxX + 25, jumpBoxY + 100); // Legs
  
  // Walking left
  let walkLeftBoxX = 250;
  let walkLeftBoxY = 150;
  rect(walkLeftBoxX, walkLeftBoxY, 50, 100); // Body
  ellipse(walkLeftBoxX + 25, walkLeftBoxY - 20, 50, 50); // Head
  line(walkLeftBoxX, walkLeftBoxY + 100, walkLeftBoxX - 20, walkLeftBoxY + 110); // Left leg
  line(walkLeftBoxX, walkLeftBoxY + 100, walkLeftBoxX + 20, walkLeftBoxY + 100); // Right leg
  
  // Walking right
  let walkRightBoxX = 350;
  let walkRightBoxY = 150;
  rect(walkRightBoxX, walkRightBoxY, 50, 100); // Body
  ellipse(walkRightBoxX + 25, walkRightBoxY - 20, 50, 50); // Head
  line(walkRightBoxX, walkRightBoxY + 100, walkRightBoxX + 20, walkRightBoxY + 110); // Right leg
  line(walkRightBoxX, walkRightBoxY + 100, walkRightBoxX, walkRightBoxY + 100); // Left leg
  
  // Jumping left
  let jumpLeftBoxX = 50;
  let jumpLeftBoxY = 50;
  rect(jumpLeftBoxX, jumpLeftBoxY, 50, 100); // Body
  ellipse(jumpLeftBoxX + 25, jumpLeftBoxY - 30, 50, 50); // Head
  line(jumpLeftBoxX, jumpLeftBoxY + 100, jumpLeftBoxX - 10, jumpLeftBoxY + 110); // Left leg
  
  // Jumping right
  let jumpRightBoxX = 150;
  let jumpRightBoxY = 50;
  rect(jumpRightBoxX, jumpRightBoxY, 50, 100); // Body
  ellipse(jumpRightBoxX + 25, jumpRightBoxY - 30, 50, 50); // Head
  line(jumpRightBoxX, jumpRightBoxY + 100, jumpRightBoxX + 20, jumpRightBoxY + 110); // Right leg
}
