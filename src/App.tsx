import React, {useEffect, useRef} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function App() {
    // 장면 선택 (장면이란 그릴수 있는 도화지 같은 개념)
    const scene = new THREE.Scene();

    const canvasRef = useRef(null);

     // scene.add(정육면체) <= 이런식으로 새로운 도형을 표시할 수 있음

    useEffect(() => {
        if (canvasRef.current) {
            // 캔버스를 지정하고 렌더러를 생성
            const renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current
            });
            // 카메라 설정 (시점 설정 2가지 존재)
            // PerspectiveCamera = 원근법을 적용
            // OrthographicCamera = 원근법을 무시
            const camera = new THREE.PerspectiveCamera(30,1);
            camera.position.set(0,0,5);

            // 3D모델 로더를 생성하여 로드할 경로 지정 후 2번째 인자에 로드된 후 실행할 함수 설정
            const loader = new GLTFLoader();
            loader.load('./assets/shiba/scene.gltf', (gltf) => {
                // 모델씬 생성
                scene.add(gltf.scene);
                // 렌더링 함수 실행
                renderer.render(scene, camera);
            });
        }
        console.log('dddddddddddddd')
    }, [canvasRef.current])

    return (
        <div className="App">
            <header className="App-header">
                threeJS
            </header>
            <canvas ref={canvasRef} width="300" height="300">
            </canvas>
        </div>
    );
}

export default App;
