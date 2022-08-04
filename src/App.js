import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Notification from './pages/Notification';
import Order from './pages/Order';
import Roles from './pages/Roles';
import Login from './pages/Login';
import Reset from './pages/Reset';
import Verification from './pages/Verification';
import Createuser from './pages/Createuser';
import Product from './pages/Product';
import Addproduct from './pages/Addproduct';
import Forgot from './pages/Forgot';
import Updateproduct from './pages/Updateproduct';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
const user=false
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={user?<Home />:<Login/>}/>
      <Route path="/notifications" element={user?<Notification />:<Login/>}/>
      <Route path="/orders" element={user?<Order />:<Login/>}/>
      <Route path="/roles" element={user?<Roles />:<Login/>}/>
      <Route path="/createuser" element={user?<Createuser />:<Login/>}/>
      <Route path="/verify/:id" element={!user?<Verification />:<Home/>}/>
      <Route path="/reset/:id" element={!user?<Reset />:<Home/>}/>
      <Route path="/forgotpassword" element={!user?<Forgot />:<Home/>}/>
      <Route path="/products" element={user?<Product />:<Login/>}/>
      <Route path="/addproduct" element={user?<Addproduct />:<Login/>}/>
      <Route path="/update/:id" element={user?<Updateproduct />:<Login/>}/>
    </Routes>
</BrowserRouter>
    );
}

export default App;
