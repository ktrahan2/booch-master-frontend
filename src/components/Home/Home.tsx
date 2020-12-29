import React from 'react'
import Logo from '../../Assets/Logo.png'
import '../../css/Home.css'
import { RouteComponentProps } from 'react-router-dom'

export default function Home( { match }: RouteComponentProps ) {
    return (
        <>
            <header id="home-header">
                <img className="logo" src={Logo} alt="Booch Master Logo"/>
            </header>
            <main id="home-main">
                <p id="app-description">
                    Welcome to Booch Master. A place to store all of your fermentation schedules and recipes!
                </p>
            </main>
        </>
    )
}
