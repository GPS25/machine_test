import React from 'react'
import { useHistory } from 'react-router-dom'

const Nav = ({ home, user, task }) => {

    const history = useHistory()
    const homes = () => {
        history.push("/home")
    }
    const tasks = () => {
        history.push("/task")
    }
    const users = () => {
        history.push("/user")
    }

    return (
        <div className="nav_navbar">
            <div className="nav_navbar_logo">LOGO</div>
            <div onClick={homes} className={`nav_navbar_home ${home}`}>Home</div>
            <div onClick={tasks} className={`nav_navbar_home ${task}`}>Tasks</div>
            <div onClick={users} className={`nav_navbar_home ${user}`}>User</div>
        </div>
    )
}

export default Nav
