import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routers from "./routers"

//app

function App() {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
