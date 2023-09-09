import React from 'react'

function Header() {
  return (
    <div className='container header'>
      <img src={require("../assets/brand-logo.png")} alt='logo'/>
      <ul>
        <li>Services & Products</li>
        <li>Insights</li>
        <li>CAREERS</li>
        <li>ABOUT US</li>
      </ul>
      <button>CONTACT US</button>
    </div>
  )
}

export default Header