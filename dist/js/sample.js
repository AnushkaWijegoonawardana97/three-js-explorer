let scene, camera, renderer, cube;

function init() {
	// Creating a Seen & Camera Setup
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	renderer = new THREE.WebGLRenderer({ antialias: true });

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	// Creating The Box Geometry
	const geometry = new THREE.BoxGeometry(2, 2, 2);
	// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	const texture = new THREE.TextureLoader().load(
		"../../assets/textures/crate.gif"
	);
	const material = new THREE.MeshBasicMaterial({ map: texture });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	// Camera Position Setup
	camera.position.z = 9;
	// camera.position.set(0, 0, 0);
	camera.lookAt(0, 0, 0);
}

// Rendering the scene
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();
