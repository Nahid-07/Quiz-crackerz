import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-700'>
            <div className='container mx-auto text-white flex justify-between h-20 items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Quiz <span>Mania</span></h1>
            </div>
            <div>
                <Link className='mx-5 font-semibold text-lg' to='/topics'>Topics</Link>
                <Link className='mx-5 font-semibold text-lg' to='/statistics'>Statistics</Link>
                <Link className='mx-5 font-semibold text-lg' to='/blog'>Blog</Link>
            </div>
            </div>
        </nav>
    );
};

export default Header;