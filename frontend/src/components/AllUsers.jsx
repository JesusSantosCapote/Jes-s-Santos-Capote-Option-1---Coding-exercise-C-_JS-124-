import React, {useEffect, useState} from "react";
import UserTable from "./UserTable";
import Button from '@mui/material/Button';
import axios from '../axios'


export default function AllUsers(){
    const [data, setData] = useState([])
    const [isShowing, setShow] = useState(false)

    const handleClick = async () =>{
        axios
        .get("/users", {})
        .then(response => {setData(response.data)})
        .catch((error) => {
            console.log(error)
        });
        setShow(true)
    }

    const handleDelete = async (id) => {
        const newData = data.filter((user) => user.id != id);
        setData(newData)
    }

    const handleUpdate = (user) => {
        const newData = data.map((item) => {
            if (item.id == user.id){
                return {...item, name: user.name};
            }
            return item;
        })
        setData(newData)
    }

    return(
        <div>
            <Button size='large' variant="contained" onClick={() => handleClick()}>
                Show all users
            </Button>
            <br/>
            <br/>
            {isShowing && <UserTable data={data} handleDelete={handleDelete} handleUpdate={handleUpdate}/>}
        </div>
    )
}