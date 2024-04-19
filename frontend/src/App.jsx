import './App.css';
import UserById from './components/UserById';
import AllUsers from './components/AllUsers';



function App() {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <UserById/>
      <AllUsers/>
    </div>
  )
}

export default App
