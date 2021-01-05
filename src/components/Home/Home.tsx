import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/Logo.png'
import NavBar from "../NavBar"
import SignUp from "../UserForm/SignUp"
import { useDispatch, useSelector } from "react-redux";
import '../../css/Home.css'
import { login } from '../../redux/modules/user';

const Home: React.FC =  (props) => {

    const userName = useSelector( (state: {userReducer: {username: string}} ) => state.userReducer.username)
    const dispatch = useDispatch()

    const [ isRenderForm, setRenderForm ] = useState(false)
    
    const renderSignUpForm = () => {
        setRenderForm(true)
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
                { isRenderForm === true ? 
                    <SignUp />
                    : <p className="app-description">You can browse existing recipes or <a onClick={renderSignUpForm} id="sign-up-link">Sign Up</a> to see more options.</p>                                }
            </main>
        </>
    )
}

export default Home
