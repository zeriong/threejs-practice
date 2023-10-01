import {Aside} from './Aside';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Aside/>
            <main className='pl-[360px]'>
                <Outlet/>
            </main>
        </>
    )
}