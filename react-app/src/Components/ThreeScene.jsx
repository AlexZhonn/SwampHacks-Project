import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CloudScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    scene.background = new THREE.Color('rgb(207, 252, 255)');

    // Function to create cloud shape
    function createCloudShape() {
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

    // Function to create a cloud
    function createCloud() {
      const geometry = createCloudShape();
      const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
      const cloud = new THREE.Mesh(geometry, material);
      cloud.scale.set(0.3, 0.3, 0.3);
      return cloud;
    }

    // Function to create the cloud field
    function createCloudField() {
      const cloudCount = 100; // You can adjust this based on how many clouds you want
      const clouds = new THREE.Group();

      const loader = new THREE.TextureLoader();
      const cloudTexture = loader.load('./Cloud.png');  // Make sure to point to your cloud texture

      for (let i = 0; i < cloudCount; i++) {
        // Create a plane geometry for each cloud
        const geometry = new THREE.PlaneGeometry(20, 20); // Adjust size to match your cloud texture
        const material = new THREE.MeshBasicMaterial({
          map: cloudTexture,
          transparent: true, // To ensure transparency is respected
          side: THREE.DoubleSide,
          opacity: 0.7, // Adjust opacity for cloud density
        });

        const cloud = new THREE.Mesh(geometry, material);

        // Position the cloud randomly in space, and also give it some rotation for a more natural effect
        cloud.position.x = (Math.random() - 0.5) * 350;
        cloud.position.y = (Math.random() - 0.5) * 350;
        cloud.position.z = Math.random();

        cloud.rotation.z = 0;//Math.random() * Math.PI; // Random rotation
        cloud.rotation.x = 0;//Math.random() * Math.PI; // Random rotation

        // Add the cloud to the cloud group
        clouds.add(cloud);
      }

      // Position the cloud field above the sphere (adjust Z positioning)
      clouds.position.z = -20; // Adjust so clouds appear in front of the sphere

      return clouds;
    }

    // Set up the cloud field and Earth sphere
    const cloudField = createCloudField();

    const geometry = new THREE.SphereGeometry(14, 36, 36);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('./earth.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff , side: THREE.DoubleSide});
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.z = -20;
    sphere.rotation.y = 80;
    sphere.rotation.x = 0.3;

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
    scene.add(sphere);

    scene.add(cloudField); // Add cloud field to scene

    camera.position.z = 60;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      cloudField.rotation.z += 0.0005; // Rotate clouds slightly for movement effect
      sphere.rotation.y += 0.0015; // Slight rotation for the sphere

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup function when the component unmounts
    return () => {
      window.removeEventListener('resize', () => {});
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default CloudScene;