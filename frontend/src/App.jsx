import './App.css';
import UserTable from './components/Table';
import TextInputWithButton from './components/TextInputWithButton';


function App() {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <TextInputWithButton button_text={"Search"} input_label={"Id"} hanldeClick={()=>{}}/>
      <UserTable/>
    </div>
  )
}

export default App
