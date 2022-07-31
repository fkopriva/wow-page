import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Paladin from './pages/Paladin';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/paladin' element={<Paladin />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
