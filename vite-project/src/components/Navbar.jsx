import React from 'react'



function Navbar() {
  
    
  const Total = 25000;
  const token = false;
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">¡Pizzería Mamma Mia!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
      {token 
      ?<a className="nav-item nav-link" href="#">Profile</a> || <a className="nav-item nav-link" href="#">Logout</a>
      : <a className="nav-item nav-link" href="#">Register</a>
    }
      
      
      
      <a className="nav-item nav-link" href="#">Login</a>
      <a className="nav-item nav-link total" href="#">Total: ${Total} </a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar