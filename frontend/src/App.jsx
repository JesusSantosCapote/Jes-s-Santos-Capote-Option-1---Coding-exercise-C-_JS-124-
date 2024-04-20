import './App.css';
import UserById from './components/UserById';
import AllUsers from './components/AllUsers';
import AddUserForm from './components/AddUserForm';


function App() {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <AddUserForm/>
      <br/>
      <UserById/>
      <br/>
      <AllUsers/>
    </div>
  )
}

export default App
