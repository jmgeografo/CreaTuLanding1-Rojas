import CartWidget from './CartWidget'
import umbriaLogo from '../../assets/logoUmbria.svg'
import { Link, useNavigate } from 'react-router';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <img src={umbriaLogo} className="logo" alt="Umbría logo"/>
            <ul>
                <li><Link to="/">Productos</Link></li>
                <li><Link to="/history">Nuestra historia</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar
