import CartWidget from './CartWidget'
import umbriaLogo from '../../assets/logoUmbria.svg'
import { Link, useNavigate } from 'react-router';

const NavBar = () => {
    
    return (
        <nav>
            <img src={umbriaLogo} className="logo" alt="Umbría logo"/>
            <ul>
                <li><Link to="/">Todos los Productos</Link></li>
                <li className="dropdown">
                    <span className="dropdown-toggle">Categorías</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/persianas">Persianas</Link></li>
                        <li><Link to="/category/sombrillas">Sombrillas</Link></li>
                        <li><Link to="/category/mallas">Mallas</Link></li>
                        <li><Link to="/category/toldos">Toldos</Link></li>
                        <li><Link to="/category/cubiertas">Cubiertas</Link></li>
                        <li><Link to="/category/indumentaria">Indumentaria</Link></li>
                        <li><Link to="/category/cortinas">Cortinas</Link></li>
                        <li><Link to="/category/barreras">Barreras</Link></li>
                        <li><Link to="/category/decoracion_exterior">Decoración Exterior</Link></li>
                        <li><Link to="/category/climatizacion">Climatización</Link></li>
                        <li><Link to="/category/accesorios">Accesorios</Link></li>
                    </ul>
                </li>
                <li><Link to="/history">Nuestra historia</Link></li>
                <li><Link to="/contact">Contacto</Link></li>    
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar
