import { Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home'
import StaffInventory from './components/Pages/StaffInventory/StaffInventory'
import Settings from './components/Pages/Settings'
import HardwareInventory from './components/Pages/HardwareInventory/HardwareInventory'
import Loans from './components/Pages/Loans/Loans'

function App() {
  return (
    <Routes>
      <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/staff-inventory' exact element = {<StaffInventory/>}/>
      <Route path = '/hard-inventory' exact element = {<HardwareInventory/>}/>
      <Route path = '/settings' exact element = {<Settings/>}/>
      <Route path = '/loans' exact element  = {<Loans/>}/>
    </Routes>
  );
}

export default App;
