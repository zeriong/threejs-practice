import {Aside} from './Aside';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Aside/>
            <main className='relative left-0 pl-[360px] w-full h-full'>
                <Outlet/>
            </main>
        </>
    )
}