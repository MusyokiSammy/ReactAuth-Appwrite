import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <nav className='navbar'>
            <div className="logo">
                PlutoSoftwares
            </div>

            <div className="nav-links">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
