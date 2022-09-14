
import './App.css';
import Productlist from './productlist';
import { Routes, Route, Link } from "react-router-dom";
import Summery from './summery';
import Thankyou from './Thankyou';

function App() {
  return (
    <Routes>
      <Route
      path='/' element={<Productlist/>}
      />
     <Route
      path='/checkout' element={<Summery/>}
      />
      <Route
      path='/thankyou' element={<Thankyou/>}
      />
    </Routes>
  );
}

export default App;
