import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="bg-slate-700 p-3">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <img src={logo} className="w-36 h-12 mx-10" alt="Logo" />
                <h3 className='font-bold text-xl mx-10'>Yu-Gi-Oh</h3>
            </div>
        </div>
    )
}

export default Navbar
