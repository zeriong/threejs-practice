interface IPatList {
    name: string;
    path: any;
    lv: number;
}

export const patList: IPatList[] = [
    {
        name: 'shiba',
        path: '/assets/shiba/scene.gltf',
        lv: 10,
    },
    {
        name: 'cat',
        path: '/',
        lv: 200,
    },
];