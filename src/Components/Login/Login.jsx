import React, { useState } from 'react'
import "./login.css"

const Login = () => {

    const [uname, setuname] = useState('')
    const [pass, setpass] = useState('')
    let passchange = localStorage.getItem("userdetail")
    passchange = JSON.parse(passchange)

    const handlelogin = () => {
        if (uname === "") {
            alert("Enter UserName")
        } else if (pass === "") {
            alert("Enter Password")
        } else if (uname === "test123") {
            if (pass === "12345" || pass === passchange.pass) {
                const obj = { uname, pass }
                localStorage.setItem("userdetail", JSON.stringify(obj));
                alert("Login Successfully")
                window.location.href = "/home";
            } else {
                alert("Incorrect Password")
            }
        } else {
            alert("Login Fail")
        }
    }

    return (
        <div align="center">
            <h1>Welcome to Login</h1>
            <div className="login_main_card">
                <div className="login_main_card_container">
                    Enter UserName: <input type="text" className="login_inp" id="username"
                        onChange={e => setuname(e.target.value)} placeholder="Enter UserName" />
                </div>
                <div className="login_main_card_container">
                    Enter Password: <input type="password" className="login_inp" id="userpassword"
                        onChange={e => setpass(e.target.value)} placeholder="Enter Password" />
                </div>
                <div className="login_main_card_container">
                    <button className="login_btn" onClick={handlelogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
