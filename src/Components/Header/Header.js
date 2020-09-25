import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
        <Link to="/home"><img src={logo} alt=""/></Link>
           
            <nav>
                
                <a href="/news">News</a>
                <a href="/destanation">Destanation</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <Link to="/login">Login</Link>
                <button onClick={() => setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;