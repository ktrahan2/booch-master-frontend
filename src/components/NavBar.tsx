import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = (props) => {
    return (
        <>
            <Link className="link" to="/recipes">Recipes</Link>
        </>
    )
}

export default NavBar
