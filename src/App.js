import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PopularSalad from './components/PopularSalad/PopularSalad';
import PopularDrinks from './components/PopularDrinks/PopularDrinks';
import OurShefs from './components/OurShefs/OurShefs';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Register from './components/Register-Login/Register/Register';
import Login from './components/Register-Login/Login/Login';
import AuthProvider from './components/hooks/Contexts/AuthProvider/AuthProvider';
import OurFoods from './components/OurFoods/OurFoods';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FacebookMessanger from './components/FacebookMessanger/FacebookMessanger';
import AddFoods from './components/AddFoods/AddFoods';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import CommingSoonFood from './components/CommingSoonFood/CommingSoonFood';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AdminRoute from './components/AdminRoute/AdminRoute';

function App() {

  return (
    <div>
   <AuthProvider>
   <Routes>
       <Route path='/' element={<Home />} >
             {/* Nesred Route */}
       <Route path="/" element={<PopularSalad/>} />
       <Route path='popularDrinks' element={ <Roll left><PopularDrinks/></Roll>} />
       <Route path="ourShef" element={<Zoom top><OurShefs/></Zoom>}/>

       </Route>
       <Route path='home' element={<Home />} >
       <Route path="popularSalads" element={<PopularSalad/>} />
       <Route path='popularDrinks' element={<PopularDrinks/>} />
      <Route path="ourShef" element={<OurShefs/>}/>
       </Route>
    <Route exact path="ourFoods" element={<PrivateRoute><OurFoods/></PrivateRoute>}>
    </Route>

    {/* Nesred Route */}
   {/* <Route path='adminPanel' element={ */}
     
        <Route path="dashboard" element={<AdminRoute><Dashboard/></AdminRoute>}>
    <Route path="addFoods" element={<AdminRoute><AddFoods/></AdminRoute>}></Route>
    <Route path='commingSoonFood' element={<AdminRoute><CommingSoonFood/></AdminRoute>} />
    <Route path='makeAdmin' element={<AdminRoute><MakeAdmin/></AdminRoute>} />
    </Route>
   
 
   

    <Route path='placeOrder' element={<PlaceOrder/>}/>
    <Route path="facebookMessanger" element={<FacebookMessanger/>} />
       <Route path="register" element={<Register/>} />
       <Route path="login" element={<Login/>} />
       <Route path="*" element={<NotFound></NotFound>}/>
     </Routes>
   </AuthProvider>
     
   
    </div>
  );
}

export default App;
