import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/Search';
import Logo from '../../assets/Logo_ML.png';

const home = () => {

    return (
        <nav className="navbar navbar-light bg-business-warning">
            <div className="container">
                <div className="row w-100">
                    <div className="col col-2">
                        <Link to="/" className="">
                           <img src={Logo} alt="logo" height={35} />
                        </Link>
                    </div>
                    <div className="col col-9">
                        <Search />
                    </div>
                    
                </div>
            </div>



        </nav>
    );
}

export default home;