import { Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Pages/Home'
import StaffInventory from './components/Pages/StaffInventory/StaffInventory'
import HardwareInventory from './components/Pages/HardwareInventory/HardwareInventory'
import Loans from './components/Pages/Loans/Loans'

function App() {
  return (
    <Routes>
      <Route path = '*' exact element= {<Navigate replace to = '/'/>}/>
      <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/staff-inventory' exact element = {<StaffInventory/>}/>
      <Route path = '/hard-inventory' exact element = {<HardwareInventory/>}/>
      <Route path = '/loans' exact element  = {<Loans/>}/>
    </Routes>
  );
}

export default App;
