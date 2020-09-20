const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove() {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
}

function onMouseDown() {
  painting = true;
}

function onMouseUp() {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}
