import React, { useState } from 'react'
import Logo from '../../Assets/Logo.png'
import NavBar from "../NavBar"
import { Link } from 'react-router-dom'
import '../../css/Home.css'


const Home: React.FC =  (props) => {

    const { isSigningIn, setSignIn } = useState<boolean>(false)

    const renderSignUpForm = () => {
        console.log('clicked')
    }
    
    return (
        <>
            <header id="home-header">
                <nav id="nav-bar">
                    <NavBar />
                </nav>
                <img className="logo" src={Logo} alt="Booch Master Logo"/>
            </header>
            <main id="home-main">
                <div className="background"></div>
                <p className="app-description">
                    Welcome to Booch Master. A place to track your Kombucha brews and share recipes. </p>
                <p className="app-description">You can browse existing recipes or <a onClick={renderSignUpForm} id="sign-in-link">Sign In</a> to see more options.</p>                                
            </main>
        </>
    )
}

export default Home
