import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Machinery from './pages/Machinery';
import Person from './pages/Person';
import User from './pages/User';
import Alert from './pages/Alert';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Home/>}/>
        <Route path='/admin/machinery' element={<Machinery/>}/>
        <Route path='/admin/person' element={<Person/>}/>
        <Route path='/admin/user' element={<User/>}/>
        <Route path='/admin/alert' element={<Alert/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
