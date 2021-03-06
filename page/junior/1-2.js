var width;
var height;

var renderer;
function initThree() {
  width = window.innerWidth * 0.5;
  height = window.innerHeight * 0.5;
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
}

var camera;
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.x = 0;
  camera.position.y = 1000;
  camera.position.z = 0;
  camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 1;
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0
  });
}

var scene;
function initScene() {
  scene = new THREE.Scene();
}

var light;
function initLight() {
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
  light.position.set(100, 100, 200);
  scene.add(light);
}

var cube;
function initObject() {
  var geometry = new THREE.Geometry();
  var material = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  var color1 = new THREE.Color(0x444444),
    color2 = new THREE.Color(0xff0000);
  // 线的材质可以由两点的颜色决定
  var p1 = new THREE.Vector3(-100, 0, 100);
  var p2 = new THREE.Vector3(100, 0, -100);
  geometry.vertices.push(p1);
  geometry.vertices.push(p2);
  geometry.colors.push(color1, color2);
  var line = new THREE.Line(geometry, material, THREE.LinePieces);
  scene.add(line);
}

function render() {
  renderer.clear();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function threeStart() {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  render();
}

threeStart();
