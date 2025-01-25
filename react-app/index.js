
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color('rgb(101, 246, 99)');

function createStarShape() {
  const starShape = new THREE.Shape();
  const outerRadius = 4;
  const innerRadius = 0.3;
  const angleStep = Math.PI / 5;
  starShape.moveTo(Math.cos(0) * outerRadius, Math.sin(0) * outerRadius);

  for (let i = 0; i < 5; i++) {
    starShape.lineTo(Math.cos(i * 2 * Math.PI / 5) * outerRadius, Math.sin(i * 2 * Math.PI / 5) * outerRadius);
    starShape.lineTo(Math.cos(i * 2 * Math.PI / 5 + angleStep) * innerRadius, Math.sin(i * 2 * Math.PI / 5 + angleStep) * innerRadius);
  }

  starShape.lineTo(Math.cos(0) * outerRadius, Math.sin(0) * outerRadius);

  const geometry = new THREE.ShapeGeometry(starShape);
  return geometry;
}

function createStar() {
  const geometry = createStarShape();
  const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
  const star = new THREE.Mesh(geometry, material);
  star.scale.set(0.3, 0.3, 0.3);
  return star;
}

function createStarField() {
  const starCount = 7000;
  const stars = new THREE.Group();

  for (let i = 0; i < starCount; i++) {
    const star = createStar();
    star.position.x = (Math.random() - 0.5) * 550;
    star.position.y = (Math.random() - 0.5) * 550;
    star.position.z = (Math.random() - 0.5) * 400;

    stars.add(star);
  }

  return stars;
}

const starField = createStarField();

const geometry = new THREE.SphereGeometry(10, 32, 32);
const loader = new THREE.TextureLoader();
const texture = loader.load('./image copy 2.png');
const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff , side: THREE.DoubleSide});
const sphere = new THREE.Mesh(geometry, material);


sphere.position.z = -20;
sphere.rotation.y = 80;



const light = new THREE.AmbientLight(0x404040);
scene.add( light );
scene.add(sphere);


scene.add(starField);

camera.position.z = 60;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.enableRotate = false;
controls.enablePan = false;
controls.enableZoom = false;

function animate() {
  requestAnimationFrame(animate);


  starField.rotation.z += 0.0005;
  sphere.rotation.y += 0.0005;
  sphere.rotation.x += 0.0005;
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


