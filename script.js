console.log("@!@"); // Test log to check if script is loaded

// Get the canvas element and its 2D drawing context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Define the size of each snake segment
let scale = 10;

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
}

// Start the game once the window is fully loaded
window.addEventListener("load", () => {
  let snake = new Snake(); // Create a new snake instance
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.snakeDraw();
    snake.updateLocation();
  }, 100);
  // Listen for keyboard input to control the snake
  window.addEventListener("keydown", (event) => {
    let userDirection = event.key.replace("Arrow", "");
    snake.updateDirection(userDirection);
    console.log(userDirection);
  });
});
