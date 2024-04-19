import './App.css';
import TextInputWithButton from './components/TextInputWithButton';
import AllUsers from './components/AllUsers';


function App() {
  return (
    <div>
      <h1>Users Dashboard</h1>
      <TextInputWithButton button_text={"Search"} input_label={"Id"} hanldeClick={()=>{}}/>
      <AllUsers/>
    </div>
  )
}

export default App
