import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,

} from "react-router-dom";

import Inc from './component';

export default function header(){
  const Numbers = {'inc':'Inc'}
  const returndata = Object.entries(Numbers).map((res,i)=>{
      return  <li className="nav-item" key={i}>
                   <Link className="nav-link" to={res[0]}>{res[1]}</Link>
              </li>
  })
  return(
      <>
<Router>
      
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
<div className="container-fluid">
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
     {returndata}
    </ul>
  </div>
</div>
</nav>
<Routes>
  <Route path='/home' element={<Home/>}/>
</Routes>
</Router>
      </>
  )
}          
