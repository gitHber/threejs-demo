// 改变物体的位置，使物体动起来
var width = window.innerWidth * 0.5;
var height = window.innerHeight * 0.5;

var renderer;
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1.0);
}

var scene;
function initScene() {
  scene = new THREE.Scene();
}

var camera;
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 600;
  camera.up.x = 0;
  camera.up.y = 1;
  camera.up.z = 0;
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0
  });
}

var light;
function initLight() {
  light = new THREE.AmbientLight(0xff0000);
  light.position.set(100, 100, 200);
  scene.add(light);
  light = new THREE.PointLight(0x00ff00);
  light.position.set(0, 0, 300);
  scene.add(light);
}

var cube;
var mesh;
function initObject() {
  var geometry = new THREE.CylinderGeometry(100, 150, 400);
  var material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position = new THREE.Vector3(0, 0, 0);
  scene.add(mesh);
}

function start() {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  animation();
}
function animation() {
  mesh.position.x -= 1;
  renderer.render(scene, camera);
  requestAnimationFrame(animation);
  stats.update();
}
start();
