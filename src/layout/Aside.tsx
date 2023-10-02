import {Link} from 'react-router-dom';
import {patList} from '../common/patList';

export const Aside = () => {
    return (
        <aside className='fixed z-10 flex flex-col gap-[16px] left-0 bg-gray-200 w-[360px] h-full p-[20px]'>
            {patList && patList.map((pat, idx) => (
                    <Link to={{ pathname: '/pat', search: `name=${pat.name}`}} key={idx} className='flex bg-red-500 h-[112px] rounded-2xl p-[16px] hover:scale-105 ease-in-out duration-200'>
                        <div className='rounded-xl bg-white w-[80px] h-[80px]'>
                            {pat.path}
                        </div>
                        <div className='pl-[12px]'>
                            <h1>Lv. {pat.lv}</h1>
                            <h1>{pat.name}</h1>
                        </div>
                    </Link>
            ))}
        </aside>
    )
}