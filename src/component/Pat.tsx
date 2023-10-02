import {useSearchParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useFrame, useLoader} from '@react-three/fiber';

export const Pat = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const meshRef = useRef<any>();
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    // const loader = useLoader;
    // const frame = useFrame;

    useEffect(() => {
        setIsLoading(true);
    }, [searchParams.get('name')]);

    useEffect(() => {
        // 로딩중일 때
        if (isLoading) {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            // timeoutRef.current = setTimeout(() => {
            //     const gltf = loader(GLTFLoader, 'assets/shiba/scene.gltf');
            //     frame((state, delta, frame) => {
            //         const mesh = gltf.scene.children[0];
            //         mesh.rotation.x += 0.01;
            //     });
            //     // 마지막 로직에 null추가
            // }, 300);
        }
    }, [isLoading]);

    return (
        <div className={`w-full h-full absolute bg-red-200 ease-in-out duration-300 ${isLoading ? 'left-1/2' : 'left-0'}`}>
            sdf
            <button onClick={ () => setIsLoading(!isLoading) } className='fixed left-1/2 w-52 h-52 bg-black text-white'> test </button>
        </div>
    )
}