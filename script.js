function drawPookalam() {
    const canvas = document.getElementById('pookalamCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e87211ff';
    ctx.strokeStyle = '#7a009fff';
    // Move the circle more to the right by adding an offset to centerX
    const centerX = canvas.width / 2 + 170; // adjust 100 as needed
    const centerY = canvas.height / 2 ;
    // Draw a filled circle in the center
    ctx.beginPath();
    ctx.arc(centerX, centerY, 210, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.linewidth = 460;

    const numDots = 24; // Number of dots
const dotRadius = 6; // Size of each dot
const ringRadius = 200; // Distance from center

for (let i = 0; i < numDots; i++) {
    const angle = (2 * Math.PI / numDots) * i;
    const x = centerX + ringRadius * Math.cos(angle);
    const y = centerY + ringRadius * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, 6 * Math.PI);
    ctx.fillStyle = '#fff700'; // Dot color
    ctx.fill();
    ctx.strokeStyle = '#bb002cff'; //dot border
    ctx.stroke();
}

    const layers = [
  { radius: 190, color: '#FFD700' },
  { radius: 150, color: '#FF69B4' },
  { radius: 120, color: '#3278cdff' },
  { radius: 80,  color: '#ff1e00ff' }, 
  { radius: 40,  color: '#31f13eff' } 
];

for (let i = 0; i < layers.length; i++) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, layers[i].radius, 0, 2 * Math.PI);
  ctx.fillStyle = layers[i].color;
  ctx.fill();
}
    
 const numPetals = 10; // Number of petals
const petalLength = 100;
const petalWidth = 50;

for (let i = 0; i < numPetals; i++) {
    const angle = (2 * Math.PI / numPetals) * i;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.ellipse(0, -petalLength, petalWidth, petalLength, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(205, 32, 81, 0.6)'; // Change color as needed
    ctx.fill();
    ctx.restore();
    ctx.stroke();
    ctx.lineWidth = 2;
}

const centerA = canvas.width / 2 + 170; // adjust 100 as needed
    const centerB = canvas.height / 2 ;
    // Draw a filled circle in the center
    ctx.beginPath();
    ctx.arc(centerA, centerB, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.linewidth = 60;
    ctx.fillStyle = 'rgba(241, 76, 117, 0.7) ';
    ctx.fill();

    ctx.beginPath();
ctx.moveTo(centerX, centerY + 42); // Top point
ctx.lineTo(centerX - 43, centerY - 26); // Bottom left
ctx.lineTo(centerX + 43, centerY - 26); // Bottom right
ctx.closePath();
ctx.fillStyle = 'rgba(224, 62, 21, 0.86)'; 
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX, centerY - 42); // Top point
ctx.lineTo(centerX - 43, centerY + 22); // Bottom left
ctx.lineTo(centerX + 43, centerY + 22); // Bottom right
ctx.closePath();
ctx.fillStyle =' rgba(224, 62, 21, 0.86)';
ctx.fill();
}
    
window.onload = drawPookalam;

