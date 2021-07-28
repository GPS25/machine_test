import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Nav from '../Nav'
import "./user.css"

const User = () => {

    const history = useHistory()
    const [changepass, setchangepass] = useState(false)
    let username = localStorage.getItem("userdetail")
    username = JSON.parse(username)
    const Hidden = () => {
        return (
            <>
                <div className="user_container">
                    <label>Password: </label>
                    <label>{username.pass}</label>
                </div>
                <div className="user_bottom">
                    <button className="user_bottom_btn" onClick={() => setchangepass(true)}>Change Password</button>
                    <button className="user_bottom_btn" onClick={logout}>Logout</button>
                </div>
            </>
        )
    }

    const ChangePassword = () => {

        let [uppass, setuppass] = useState()
        const Changepass = () => {
            const obj = { uname: username.uname, pass: uppass }
            localStorage.setItem("userdetail", JSON.stringify(obj));
            window.location.href = "/user"
        }
        return (
            <>
                <div className="user_container">
                    <label>New Password: </label>
                    <label><input type="text" id="pass" value={uppass} onChange={(e) => setuppass(e.target.value)} /></label>
                </div>
                <div className="user_bottom">
                    <button className="user_bottom_btn" onClick={Changepass}>Save Password</button>
                    <button className="user_bottom_btn" onClick={logout}>Logout</button>
                </div>
            </>
        )
    }

    const logout = () => {
        localStorage.setItem("userdetail", '');
        history.push("/")
    }

    return (
        <div>
            <Nav user="nav_navbar_active" />
            <div className="user_container">
                <label>Username: </label>
                <label>{username.uname}</label>
            </div>
            {
                changepass ? <ChangePassword /> : <Hidden />
            }
        </div>
    )
}

export default User
