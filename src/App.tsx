// import React, {useEffect, useRef} from 'react';
// import * as THREE from 'three';
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
//
// function App() {
//     const canvasRef = useRef(null);
//
//     useEffect(() => {
//         if (canvasRef.current) {
//             // 장면 선택 (장면이란 그릴수 있는 도화지 같은 개념)
//             const scene = new THREE.Scene();
//
//             // 캔버스를 지정하고 렌더러를 생성
//             const renderer = new THREE.WebGLRenderer({
//                 canvas: canvasRef.current,
//                 antialias: true,
//             });
//
//             // 카메라 설정 (시점 설정 2가지 존재)
//             // PerspectiveCamera = 원근법을 적용
//             // OrthographicCamera = 원근법을 무시
//             const camera = new THREE.PerspectiveCamera(30,1);
//             camera.position.set(0,0,5);
//
//             // 배경색상 설정
//             scene.background = new THREE.Color('#e5e5e5');
//
//             // 조명 설정
//             // AmbientLight: scene내의 모든 object들에 전 방향에서 조명을 비춤
//             // HemisphereLight: 첫번째 인자는 하늘을 향해 비추는 색상, 두번째 인자는 바닥을 향하는 면에 비춰지는 색상으로 지정 가능
//             // PointLight: 모든 방향으로 균일하게 퍼지는 빛
//             // DirectionalLight: 태양광, 평행하게 이동하는 빛으로 default는 항상 위에서 비춰주고 position을 사용해 위치변경 가능
//             // RectAreaLight: 촬영장의 직사각형 조명과 비슷하고 세번째 인자로 직사각형의 너비, 네번째 인자로 높이를 받는다.
//             // SpotLight: 손전등처럼 점에서 시작해 원뿔 모양으로 퍼져나가는 조명
//             // 모든 조명들에는 Helpers가 존재
//             const light = new THREE.DirectionalLight(0xffff00, 10);
//             scene.add(light);
//
//             // 3D모델 로더를 생성하여 로드할 경로 지정 후 2번째 인자에 로드된 후 실행할 함수 설정
//             const loader = new GLTFLoader();
//             loader.load('/assets/shiba/scene.gltf', (gltf) => {
//                 // 모델씬 생성
//                 scene.add(gltf.scene);
//
//                 // 애니메이션 추가
//                 const animate = () => {
//                     requestAnimationFrame(animate);
//                     gltf.scene.rotation.y += 0.001;
//                     // 렌더링 함수 실행
//                     renderer.render(scene, camera);
//                 }
//                 animate();
//             });
//
//             // TODO: 마우스로 컨틀로할 수 있는 OrbitControls 적용시켜보기
//         }
//     }, []);
//
//     return (
//         <div>
//             <header>귀여운 시바입니다.</header>
//             <canvas ref={canvasRef} width={300} height={300}/>
//         </div>
//     )
// }

import {Router} from './router/Router';

function App() {
    return <Router/>
}

export default App;
