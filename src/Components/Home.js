import "../css/Home.css";
import backround_image from "../images/backround-img.jpg"
import { useState, useEffect, } from 'react';
import { Icon } from '@iconify/react';
import checkCircleOutline from '@iconify/icons-material-symbols/check-circle-outline';
import circle_up_right from '../images/circle-up-right.png';
import circle_bottom_left from '../images/circle-bottom-left.png';

const Home = () => {
    async function deleteItemFromList(number) {
        var new_array = []
        for (var i = 0; i <= local.length - 1; i++) {
            if (local[i] !== number) {
                new_array.push(local[i])
            }
        }
        localStorage.removeItem('data')
        console.log(new_array.length)
        if (new_array.length > 0) {
            localStorage.setItem('data', JSON.stringify(new_array))
        }
        window.location.reload()
    }
    useEffect(() => {
        if (localStorage.getItem('data')) {
            var data_from_local = JSON.parse(localStorage.getItem('data'))
            var obj_value = Object.values(data_from_local)
            setLocal(obj_value)
        }
    }, [])
    var counter = 1
    const [data, setData] = useState('')
    const [local, setLocal] = useState([])
    const AddBtnClicked = () => {
        if (data === '') {
            return
        }
        if (localStorage.getItem('data')) {
            var array = (JSON.parse(localStorage.getItem('data')))
            var values = Object.values(array)
            console.log(values)
            console.log(typeof (values))
            values.push(data)
            setLocal(values)
            localStorage.removeItem('data')
            localStorage.setItem('data', JSON.stringify(values))
        } else {
            var lista = []
            lista.push(data)
            localStorage.setItem('data', JSON.stringify(lista))
            var value = Object.values(lista)
            setLocal(value)
        }
        setData('')
    }
    return (
        <div className="div-image">
            <img className="backround-image" src={backround_image} alt="" />
            <div className="div-input">
                <img src={circle_up_right} className="cerc-dreapta" alt="" />
                <input type="text" className="task-input" value={data} onChange={(e) => setData(e.target.value)} placeholder="Write a task" />
                <button className="task-add-btn" onClick={AddBtnClicked}>ADD</button>
            </div>
            <div className="tasks-display-div-div">
                <div className="div-for-tasks">
                    {
                        localStorage.getItem('data') ?
                            (
                                local.map((item) => {
                                    return (
                                        <ul>
                                            {item && <li>{counter++ + '. ' + item}<button className="delete-btn" onClick={() => deleteItemFromList(item)}>DELETE</button></li>}

                                        </ul>
                                    )

                                })
                            )
                            : <div className="no-task-text-div"><h1 className="text-notasks">No tasks for now <Icon className="checkmarkicon" icon={checkCircleOutline} /> </h1></div>
                    }
                </div >
                <img src={circle_bottom_left} className="circle_bottom_left" alt="" />
            </div>
        </div>
    );
};

export default Home;
