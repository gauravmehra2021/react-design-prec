import React from 'react'
import './App.css'
import logo from '.././public/images/Logo.png'

const App = () => {
  return (
  <div className="dashboard">
      <header className="header">

<div className='headers-main'>
  <div className='logo'>
    <img  src={logo}/>
  </div>
   <div className='nav'>
<ul class="nav-menu">
  <li class="nav-item">
    <a href="#" class="nav-link">Home</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Services</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link">Contact</a>
  </li>
</ul>



   </div>
    <div className='profile'>profile</div>
</div>

      </header>

      <aside className="sidebar">Sidebar</aside>

      <main className="main">Main Content</main>


      <footer className="footer">Footer</footer>
    </div>
  )
}

export default App
