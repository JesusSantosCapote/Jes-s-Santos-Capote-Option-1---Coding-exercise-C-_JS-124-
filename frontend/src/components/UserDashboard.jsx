import { Box, Typography } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import { useState } from "react";

export default function UserDashboard(){
    const {users, handleUpdate, handleInsert, handleDelete} = useUsers()
    const [searchedId, setSearchedId] = useState(-1)

    
    return (
        <Box>
            <Typography variant="h1">Users Dashboard</Typography>
            
            <UserTable data={users} handleDelete={handleDelete} handleUpdate={handleUpdate} />

            <AddUserForm handleInsert={handleInsert} />
        </Box>
    )
}