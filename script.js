console.log("@!@"); // Test log to check if script is loaded

// Get the canvas element and its 2D drawing context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Define the size of each snake segment
canvas.width = 300;
canvas.height = 300;
let scale = 10;

let rows = canvas.height / scale;
let column = canvas.width / scale;

// Food constructor to manage the food's position and rendering
function Food() {
  this.x = 0;
  this.y = 0;
  // Generate a random location for the food within the game grid
  this.generateRandomLocation = function () {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * 10;
    this.y = (Math.floor(Math.random() * column - 1) + 1) * 10;
  };
  // Draw the food on the canvas
  this.foodDraw = function () {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}

// Define the Snake class
function Snake() {
  // Initial position of the snake
  this.x = 0;
  this.y = 10;
  // Initial movement direction (moving right)
  this.xSpeed = scale;
  this.ySpeed = 0;
  // Draw the snake on the canvas
  this.snakeDraw = function () {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
  // Update the snake's position based on its speed
  this.updateLocation = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // Wrap the snake around the screen when it goes beyond canvas boundaries
    if (this.x > canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width;
    } else if (this.y > canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  //Function to control the direction of snake movement
  this.updateDirection = function (userDirection) {
    switch (userDirection) {
      case "Up": {
        this.xSpeed = 0;
        this.ySpeed = -scale;
        break;
      }
      case "Down": {
        this.xSpeed = 0;
        this.ySpeed = +scale;
        break;
      }
      case "Left": {
        this.xSpeed = -scale;
        this.ySpeed = 0;
        break;
      }
      case "Right": {
        this.xSpeed = +scale;
        this.ySpeed = 0;
        break;
      }
    }
  };
  // Check if the snake's head is on the food (i.e., food is eaten)
  this.isEatFood = function (food) {
    if (this.x === food.x && this.y === food.y) {
      return true;
    }
    return false;
  };
}

// Start the game once the window is fully loaded
window.addEventListener("load", () => {
  let snake = new Snake(); // Create a new snake instance
  let food = new Food(); // Create a new food instance
  food.generateRandomLocation();
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.foodDraw();
    snake.snakeDraw();
    snake.updateLocation();
    if (snake.isEatFood(food)) {
      console.log("عه خورد");
      food.generateRandomLocation();
    }
  }, 100);
  // Listen for keyboard input to control the snake
  window.addEventListener("keydown", (event) => {
    let userDirection = event.key.replace("Arrow", "");
    snake.updateDirection(userDirection);
  });
});
