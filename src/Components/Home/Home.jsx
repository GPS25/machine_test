import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import "./home.css"

const Home = () => {
    const [info, setinfo] = useState()
    const drop1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis."
    const drop2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis"
    const drop3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum numquam natus blanditiis a dolorem delectus consequuntur nostrum vero officiis"
    const a = [{ dropdown: "Dropdown", info: drop1 },
    { dropdown: "Dropdown2", info: drop2 },
    { dropdown: "Dropdown3", info: drop3 }]

    const handlechange = (e) => {
        const val = e.target.value
        setTimeout(() => {
            document.getElementById("select").value = val
        }, 10)
        // eslint-disable-next-line
        a.map(d => {
            if (val === d.dropdown) {
                setinfo(d.info)
            }
        })
    }

    useEffect(() => {
        // eslint-disable-next-line
        a.map(d => {
            if ("Dropdown" === d.dropdown) {
                setinfo(d.info)
            }
        })
        // eslint-disable-next-line
    }, [])

    const Dropdown = () => {
        return (
            <>
                <select className="home_dropdown_select" id="select" onChange={handlechange}>
                    {
                        a.map(d => {
                            return (
                                <option value={d.dropdown} key={d.info}>{d.dropdown}</option>
                            )
                        })
                    }
                </select>
            </>
        )
    }

    const Information = () => {
        return (
            <>
                <p className="home_information_p">{info}</p>

                <div className="home_information_div">NOTE : Here should be the text related to selected dropdown option.</div>
            </>
        )
    }
    const Navbar = () => {
        return (
            <>
                <Dropdown />
                <Information />
            </>
        )
    }
    return (
        <>
            <Nav home="nav_navbar_active" />
            <Navbar />
        </>
    )
}

export default Home
