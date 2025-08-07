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
  };
}
// Start the game once the window is fully loaded
window.addEventListener("load", () => {
  let snake = new Snake();// Create a new snake instance
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.snakeDraw();
    snake.updateLocation();
  }, 100);
});
