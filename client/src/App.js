import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Landing from './Views/landing';
import Nav from './Views/nav';
import Home from './Views/Home/home';
import Detail from './Views/Detail/Detail';
import Form from './Views/Form/Form';
import Error from "./Views/error"
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav/>}
      
      <div> 
      <Routes> 
      <Route path="/" element={<Landing />} />
  <Route path="/home" element={<Home />} />
  <Route path="/detail/:id" element={<Detail />} />
  <Route path="/form" element={<Form />} /> 
  <Route path="/error" element={<Error/>}/>   
    </Routes>
    </div>
    </div>
  );
}

export default App;
