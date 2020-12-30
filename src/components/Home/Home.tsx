import React from 'react'
import Logo from '../../Assets/Logo.png'
import NavBar from "../NavBar"
import '../../css/Home.css'

const Home: React.FC =  (props) => {
    
    return (
        <>
            <header id="home-header">
                <img className="logo" src={Logo} alt="Booch Master Logo"/>
                <nav id="nav-bar">
                    <NavBar />
                </nav>
            </header>
            <main id="home-main">
                <div className="background"></div>
                
                <p id="app-description">
                    Welcome to Booch Master. A place to track your Kombucha brews and share recipes. 
                </p>
            </main>
        </>
    )
}

export default Home
