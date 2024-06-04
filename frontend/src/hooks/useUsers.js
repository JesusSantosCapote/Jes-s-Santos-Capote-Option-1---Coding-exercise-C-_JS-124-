import instance from "../axios";
import { useState, useEffect } from "react";
import { USER_ENDPOINT } from "../constants/constants";
import { useSnackbar } from "notistack";

export function useUsers(){
    const [users, setUsers] = useState([])
    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => {
        instance
        .get(USER_ENDPOINT)
        .then(response => {setUsers(response.data); console.log(response)})
        .catch((error) => {
            console.log(error)
        });
    }, [])

    const handleDelete = async (id) => {
        const newData = users.filter((user) => user.id != id);
        const oldData = users.map((user) => user)

        setUsers(newData)

        await instance.delete(USER_ENDPOINT + id)
        .then(() => enqueueSnackbar("Operation completed succefully", {variant:'success'}))
        .catch((message) => {
            console.log(message)
            setUsers(oldData)
            enqueueSnackbar("Unable to complete the operation due server error", {variant:'warning'})
        })
    }

    const handleUpdate = async (user) => {
        const newData = users.map((item) => {
            if (item.id == user.id){
                return {id: item.id, name: user.name};
            }
            return item;
        })
        const oldData = users.map((user) => user)
        setUsers(newData)

        await instance.put(USER_ENDPOINT + user.id, user)
        .then(() => enqueueSnackbar("Operation completed succefully", {variant:'success'}))
        .catch((message) => {
            console.log(message)
            setUsers(oldData)
            enqueueSnackbar("Unable to complete the operation due server error", {variant:'warning'})
        })
    }

    const handleInsert = async (id, name) => {
        const oldData = users.map((user) => user)
        const newData = users.map((user) => user)
        newData.push({id:id, name:name})

        setUsers(newData)

        await instance.post(USER_ENDPOINT, {id: id, name:name})
        .then(() => enqueueSnackbar("Operation completed succefully", {variant:'success'}))
        .catch((message) => {
            console.log(message)
            setUsers(oldData)
            enqueueSnackbar("Unable to complete the operation due server error", {variant:'warning'})
        })
    }

    return {
        users,
        handleDelete,
        handleUpdate,
        handleInsert
    }
}