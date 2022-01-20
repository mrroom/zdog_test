// Made with Zdog

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

let rect1 = new Zdog.Box({
  addTo: illo,
  width: 100,
  height: 20,
  depth: 80,
  stroke: false,
  color: '#C25', // default face color
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  translate: { x: -50, z:-200 },
  rotate: { x:-0.5, y: 0.05 }
});

let rect2 = new Zdog.Box({
  addTo: rect1,
  width: 100,
  height: 20,
  depth: 80,
  stroke: false,
  color: '#C25', // default face color
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: '#ED0',
  bottomFace: '#636',
  translate: { z:200 },
  //rotate: { x:-0.5, y: 0.05 }
});

function animate() {
  //illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

//animate();
illo.updateRenderGraph();
