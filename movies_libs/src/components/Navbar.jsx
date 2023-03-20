import { Link, useNavigate } from 'react-router-dom'
import { FaCameraRetro, FaSearch } from "react-icons/fa";
import { useState } from 'react';

import './Navbar.css'

const Navbar = () => {

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}&language=pt-BR`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <FaCameraRetro /> Movies Lib
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Busque um filme'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <FaSearch />
                </button>
            </form>
        </nav>
    )
}

export default Navbar