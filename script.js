document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let brushSize = 5;
  let color = "black";

  function draw(e) {
    if (!isDrawing) return;
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function changeColor(newColor) {
    color = newColor;
  }

  function erase() {
    color = "#ffffff"; // white color for eraser
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));

  document.getElementById("brushSizeSlider").addEventListener("input", () => {
    brushSize = document.getElementById("brushSizeSlider").value;
    document.getElementById("brushSizeDisplay").textContent = brushSize;
  });

  document.getElementById("clearButton").addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  document.getElementById("eraseButton").addEventListener("click", erase);
  document
    .getElementById("blackButton")
    .addEventListener("click", () => changeColor("black"));
  document
    .getElementById("pinkButton")
    .addEventListener("click", () => changeColor("#F50057"));
  document
    .getElementById("blueButton")
    .addEventListener("click", () => changeColor("#2979FF"));
  document
    .getElementById("yellowButton")
    .addEventListener("click", () => changeColor("#FFD600"));
});
