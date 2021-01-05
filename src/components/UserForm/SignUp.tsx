import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/modules/user';

export interface UserInformation {
    username: string,
    email: string,
    password: string
}

export default function SignUp() {

    const userName = useSelector( (state: {userReducer: {username: string}} ) => state.userReducer.username)
    const dispatch = useDispatch()

    const [ isEmail, setEmail ] = useState("")
    const [ isPassword, setPassword ] = useState("")

    const submitUser = (e: Event) => {
        e.preventDefault()
        console.log("hello")
    }

    const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(login(e.target.value))
    }

    return (
        <div id="sign-up-form">
            <div className="form-input">
                <label>Username:</label>
                <input 
                    type="text"
                    value={userName}
                    onChange={ (e) => updateUserName(e)}
                    placeholder="enter username"
                />
                </div>
            <div className="form-input">
            <label>Email:</label>
                <input 
                    type="text"
                    value={isEmail}
                    onChange={ (e) => setEmail(e.target.value)}
                    placeholder="enter email"
                />
            </div>
            <div className="form-input">
                <label>Password:</label>
                <input 
                    type="password"
                    value={isPassword}
                    onChange={ (e) => setPassword(e.target.value)}
                    placeholder="enter password"
                />
            </div>
            <button
                className="button"
                onClick={ () => submitUser}
            >Submit</button>
        </div>
    )
}
