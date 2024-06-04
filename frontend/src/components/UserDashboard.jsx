import { Box, Typography } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import UserById from "./UserById";

export default function UserDashboard(){
    const {users, handleUpdate, handleInsert, handleDelete} = useUsers()
    return (
        <Box>
            <Typography variant="h1">Users Dashboard</Typography>
            <AddUserForm handleInsert={handleInsert} />
            <UserById/>
            <UserTable data={users} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </Box>
    )
}