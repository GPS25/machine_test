import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import Nav from '../Nav'
import "./task.css"

const Task = () => {

    const url = "https://jsonplaceholder.typicode.com/todos"
    const [loader, setloader] = useState(true)
    let [apidata, setapidata] = useState()

    const fetch = async () => {
        const res = await axios.get(url)
        const data = await res.data;
        setapidata(data)
        if (data) {
            setloader(false)
        }
    }
    useEffect(() => {
        fetch()
        // eslint-disable-next-line
    }, [])

    const deletehandler = (id) => {
        const updatestate = apidata.filter((c) => {
            return c.id !== id
        });
        setapidata(updatestate)
    }
    const edithandler = () => {
        document.getElementById("myModal").style.display = "block";
    }

    const Card = () => {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div>Enter Id <input type="text" id="id" className="task_card_modal" placeholder="Enter Id" /></div>
                    <div>Enter userId <input type="text" id="userid" className="task_card_modal" placeholder="Enter UserId" /></div>
                    <div>Enter Title <input type="text" id="title" className="task_card_modal" placeholder="Enter Title" /></div>
                    <div>Select Status <select id="status" className="task_card_modal">
                        <option>true</option>
                        <option>false</option>
                    </select></div>
                    <button className="task_card_modal_btn" onClick={submitadd}>Add</button>
                </div>
            </div>
        )
    }

    const submitadd = () => {
        setapidata('')
        var id = document.getElementById("id").value;
        var userid = document.getElementById("userid").value;
        var title = document.getElementById("title").value;
        var status = document.getElementById("status").value;
        status = Boolean(status)
        var obj = { id, userid, title, status }
        setapidata([...apidata, obj])
        document.getElementById("myModal").style.display = "none";
    }

    return (
        <div>
            <Nav task="nav_navbar_active" />
            <Card />
            {
                loader ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    <table className="task_table" cellSpacing="0">
                        <tbody>
                            {
                                apidata.map(d => {
                                    return (
                                        <tr className="task_table_tr" key={d.id}>
                                            <td className="border_bottom">{d.id}</td>
                                            <td className="border_bottom">{d.title}</td>
                                            <td className="border_bottom">{String(d.completed)}</td>
                                            <td><button className="task_table_tr_btn" onClick={() => deletehandler(d.id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
            <button className="task_btn" onClick={edithandler}>Add Task</button>
        </div>
    )
}

export default Task

