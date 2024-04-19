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

    return(
        <div>
            <Button size='large' variant="contained" onClick={() => handleClick()}>
                Show all users
            </Button>
            {isShowing && <UserTable data={data}/>}
        </div>
    )
}