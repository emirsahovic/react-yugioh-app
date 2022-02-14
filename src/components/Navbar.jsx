import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();

    const routeMatch = (url) => {
        if (pathname === url) return true;
    }

    return (
        <div className="bg-slate-700 p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <img src={logo} className="w-36 h-12 mx-24" alt="Logo" />
                <div className='flex space-x-6 mx-24 text-lg'>
                    <Link to="/" className={`${routeMatch("/") ? "text-lime-400 font-bold" : ""} hover:opacity-70 transition duration-150`}>All Cards |</Link>
                    <Link to="/spellcaster" className={`${routeMatch("/spellcaster") ? "text-lime-400 font-bold" : ""} hover:opacity-70 transition duration-150`}>Spellcaster</Link>
                    <Link to="/dragon" className={`${routeMatch("/dragon") ? "text-lime-400 font-bold" : ""} hover:opacity-70 transition duration-150`}>Dragon</Link>
                    <Link to="/zombie" className={`${routeMatch("/zombie") ? "text-lime-400 font-bold" : ""} hover:opacity-70 transition duration-150`}>Zombie</Link>
                    <Link to="/machine" className={`${routeMatch("/machine") ? "text-lime-400 font-bold" : ""} hover:opacity-70 transition duration-150`}>Machine</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
