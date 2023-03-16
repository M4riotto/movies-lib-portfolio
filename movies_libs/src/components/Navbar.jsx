import { Link } from 'react-router-dom'
import { FaCameraRetro, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <FaCameraRetro /> Movies Lib
                </Link>
            </h2>
            <form>
                <input type="text" placeholder='Busque um filme' />
                <button type="submit">
                    <FaSearch />
                </button>
            </form>
        </nav>
    )
}

export default Navbar