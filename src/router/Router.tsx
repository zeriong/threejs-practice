import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from '../layout/Layout';
import {Home} from '../component/Home';
import {Pat} from '../component/Pat';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout/> }>
                    <Route index element={ <Home/> }/>
                    <Route path='pat' element={ <Pat/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}