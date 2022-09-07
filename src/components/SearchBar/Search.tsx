import React, { useEffect, useState } from 'react';
import { NavigationType, useNavigate } from 'react-router-dom';
import { setTextAction } from '../../redux/actions/searchBarAction';

import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import '../../styles/SearchBar.scss';

const Home = () => {
    
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const textToSearch: string = useAppSelector((state: any) => state.search.textToSearch);
    
    let handleChange = (event: any) => {
        
        dispatch(setTextAction(event.target.value as string));
    }
    

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (textToSearch.length <= 0) return;
        navigate(`/items?search=${textToSearch}`);
    }
    return (
        <div className='nav-search'>
            {/* form */}
            <form onSubmit={handleSubmit} className="nav-search">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="campo-busqueda" value={textToSearch} onChange={handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-gray rounded-end rounded-2" type="submit" onClick={handleSubmit}>
                            <div className='icon-search'></div>
                        </button>
                    </div>
                </div>
            </form>


        </div>

    );
}

export default Home;