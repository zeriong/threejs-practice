import {Aside} from './Aside';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Aside/>
            <main className='relative left-0 ml-[360px] h-full'>
                <Outlet/>
            </main>
        </>
    )
}