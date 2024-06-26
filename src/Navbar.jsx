import React from 'react'

const Navbar = ({setCategory,category}) => {
  
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" ><span className='badge bg-light text-dark fs-4'>NewsApp</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link active"  onClick={()=>{
            setCategory('technology')
            console.log(category)
          }}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active"  onClick={()=>{
            setCategory('business')
             console.log(category)
          }}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={()=>{
            setCategory('health')
             console.log(category)
          }}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active"  onClick={()=>{
            setCategory('sports')
             console.log(category)
          }}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active"  onClick={()=>{
            setCategory('entertainment')
             console.log(category)
          }} >Entertainments</div>

        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
