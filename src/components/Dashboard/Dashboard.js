import React from 'react';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Dashboadr.css'
const Dashboard = () => {
    return (
        <div>
<Navigation></Navigation>
<h2 className='m-0 nastedLinks'>
            <NavLink
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="addFoods"
          >
          Add Product
          </NavLink>
            <NavLink
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="commingSoonFood"
          >
           Added Product
          </NavLink>
            <NavLink
            id="nestedRoute"
            className={({ isActive }) => (isActive ? "activeStyle" : "onlyBorder")}
            to="makeAdmin"
          >
          Make Admin
          </NavLink>
</h2>
      
          <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;