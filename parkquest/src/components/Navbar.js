import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [showNav, setShowNav] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setShowNav(false);
        window.scrollTo(0,0);
      }, [location]);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return(
        <header>
            <nav className='navbar'>
                <Link to='/' className='home-link'>
                    <img src={require('../assets/ParkQuestLogo.png')} alt='Home' className='home-link-img'/>
                </Link>
                <button onClick={toggleNav} className='nav-button'>
                    <span/><span/><span/>
                </button>
                <ul className={`nav-items ${showNav ? 'show' : ''}`}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Leaderboards</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Account</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;