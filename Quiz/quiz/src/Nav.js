import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul className='base'>
       <li className='navbar'>
         <Link to ='/' className=''>
           <img className='navbar logo' src={require('./logo.svg')}/>
         </Link>
       </li>
       <li className='navbar-center'>
         <Link to ='/' className='block'>
           <a className='name'>Home</a>
         </Link>
       </li>
       <li className='navbar-center'>
         <Link to ='/who' className='block'>
           Who
         </Link>
       </li>
       <li className='navbar-right'>
         <Link to ='/contact' className='block'>
           Contact
         </Link>
       </li>
     </ul>
    </nav>
  );
}
