import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import * as THREE from "three";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const SplashContiner = tw.div`relative w-[100vw] h-[100vh] bg-[#f8f8f8] dark:bg-[#171717]`;

const SplashView = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(1, 3, 3);
    scene.add(light);

    const loader = new GLTFLoader();
    let laptop: THREE.Group | null = null;

    // load model
    loader.load("/models/laptop.glb", (gltf) => {
      laptop = gltf.scene;
      scene.add(laptop);

      const wrapper = new THREE.Object3D();
      scene.add(wrapper);

      wrapper.add(laptop);

      laptop.rotateY(Math.PI);

      // 1. Camera Settings
      const box = new THREE.Box3().setFromObject(laptop);
      const size = new THREE.Vector3();
      box.getSize(size);
      const modelWidth = size.x;
      const modelHeight = size.y;

      const fovRad = THREE.MathUtils.degToRad(camera.fov);
      const aspect = camera.aspect;

      const sizeToFit = modelWidth / aspect;

      const distance = sizeToFit / 2 / Math.tan(fovRad / 2);
      camera.position.z = distance * 2;

      const center = new THREE.Vector3();
      box.getCenter(center);
      laptop.position.sub(center);

      const offset = modelHeight * 0.5;
      laptop.position.y += offset;

      // open laptop
      const topPart = laptop.getObjectByName("macBook_TopPart");
      if (topPart) {
        topPart.rotation.x = THREE.MathUtils.degToRad(0);

        gsap.to(topPart.rotation, {
          x: Math.PI / 2,
          duration: 1.5,
          delay: 1,
          ease: "power2.inOut",
        });
      }

      // turn on screen
      laptop.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Cube004_1") {
          const screenMesh = child as THREE.Mesh;
          const originalMaterial = screenMesh.material;

          if (originalMaterial instanceof THREE.MeshStandardMaterial) {
            const emissiveColor = new THREE.Color(
              originalMaterial.emissive.getHex()
            );

            // turn off
            originalMaterial.emissive.setHex(0x000000);

            // turn on
            gsap.to(originalMaterial.emissive, {
              r: emissiveColor.r,
              g: emissiveColor.g,
              b: emissiveColor.b,
              duration: 0.5,
              delay: 2.5,
              onUpdate: () => {
                originalMaterial.needsUpdate = true;
              },
            });
          }
        }
      });

      gsap.to(camera.position, {
        x: 0,
        y: 1,
        z: -1,
        duration: 1.5,
        delay: 3,
        ease: "power2.inOut",
      });

      // 📍 div 중앙 좌표 구하기
      //   const rect = targetRef.current?.getBoundingClientRect();
      //   if (rect) {
      //     const centerX = rect.left + rect.width / 2;
      //     const centerY = rect.top + rect.height / 2;

      //     // 2D 좌표 → NDC(-1~1) 변환
      //     const ndcX = (centerX / window.innerWidth) * 2 - 1;
      //     const ndcY = -(centerY / window.innerHeight) * 2 + 1;

      //     // NDC → 3D 좌표 (카메라 near plane 기준)
      //     const targetVec = new THREE.Vector3(ndcX, ndcY, -0.5).unproject(camera);

      //     // 4. GSAP 애니메이션으로 이동/축소
      //     gsap.to(laptop.position, {
      //       x: targetVec.x,
      //       y: targetVec.y,
      //       z: targetVec.z,
      //       duration: 2.5,
      //       delay: 2.5,
      //       ease: "power2.inOut",
      //     });

      //     gsap.to(laptop.scale, {
      //       x: 0.2,
      //       y: 0.2,
      //       z: 0.2,
      //       duration: 2.5,
      //       delay: 2.5,
      //     });
      //   }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <SplashContiner>
      <div ref={mountRef} className="absolute inset-0" />
    </SplashContiner>
  );
};

export default SplashView;
