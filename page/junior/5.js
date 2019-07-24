var width = window.innerWidth * 0.5;
var height = window.innerHeight * 0.5;
var renderer;
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  renderer.setClearColor(0x00ff00, 0.3);
}

function initChanger() {
  var fov = document.createElement('input')
  fov.type = 'text'
  fov.addEventListener('change', (e) => {
    var fovNum = parseFloat(e.target.value) 
    camera.fov = fovNum
    camera.updateProjectionMatrix()
  })
  document.body.appendChild(document.createTextNode('Fov(0-180):'))
  document.body.appendChild(fov)
}

var camera;
function initCamera() {
  camera = new THREE.PerspectiveCamera(30, width / height, 1, 10000);
  camera.position.set(0, 0, 600);
  camera.up.set(0, 1, 0);
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
  // 环境光
  light = new THREE.AmbientLight(0x000000);
  light.position.set(100, 100, 200);
  scene.add(light);
  // 点光源
  light = new THREE.PointLight(0xffffff);
  light.position.set(0, 0, 300);
  scene.add(light);
  // // 聚光灯
  // light = new THREE.SpotLight(0xffffff);
  // light.position.set(0, 0, 300);
  // scene.add(light);
  // // 方向光
  // light = new THREE.DirectionalLight(0xffffff);
  // light.position.set(0, 0, 300);
  // scene.add(light);
}

var cube;
var cube2;
function initObject() {
  var geometry = new THREE.CylinderGeometry(40, 50, 10, 6, 2)
  var material = new THREE.MeshLambertMaterial({color: 0xdecf0a })
  cube = new THREE.Mesh(geometry, material)
  cube.position.set(0,0,0)
  scene.add(cube)
}

function threeStart() {
  initThree()
  initCamera()
  initScene()
  initLight()
  initObject()
  initChanger()
  animation()
}

function animation() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera);
  requestAnimationFrame(animation);
}

threeStart()
console.log(cube)