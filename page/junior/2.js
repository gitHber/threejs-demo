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

var camera;
function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  // 相机的位置
  camera.position.x = 0;
  camera.position.y = 1000;
  camera.position.z = 0;
  // 相机的旋转，z为1，表明z方向为正方向，可以把相机理解为一个球体，而不是点
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
  // 一条线
  geometry.vertices.push(new THREE.Vector3(-500, 0, 0));
  geometry.vertices.push(new THREE.Vector3(500, 0, 0));
  for (var i = 0; i <= 20; i++) {
    var line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 })
    );
    // 移动线的z轴， 形成平行线
    line.position.z = i * 50 - 500;
    scene.add(line);
    var line = new THREE.Line(
      geometry,
      new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 })
    );
    line.position.x = i * 50 - 500;
    // 旋转90度成相交的垂直线
    line.rotation.y = (90 * Math.PI) / 180;
    scene.add(line);
  }
}
function start() {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  renderer.clear();
  renderer.render(scene, camera);
}

start();
