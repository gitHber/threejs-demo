# threejs-demo
### PerspectiveCamera(相机)
```
new THREE.PerspectiveCamera(
  fov,    // 可视角度
  aspect, // 实际窗口的纵横比
  near,   // 近处的裁面的距离
  far     // 远处的裁面的距离
)
```
### WebGLRenderer(渲染器)
```
new THREE.WebGLRenderer({
  antialias: true,      // 是否开启反锯齿
  precision: 'highp',   // highp/mediump/lowp 着色精度
  alpha: true,          // 设置背景色透明
  
})
```

