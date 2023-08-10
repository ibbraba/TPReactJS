import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Acceuil</Link>
                </li>
                <li>
                    <Link to="/men" 
                    state={{page : 'men'}}
                    >Homme</Link>
                </li>

                <li>
                    <Link to="/women"
                    state={{page : 'women'}}
                    >Femme</Link>
                </li>
           

            </ul>
        </nav>
    </header>
    <section>
        <Outlet></Outlet>
    </section>
    </div>    
    
    

    
  )
}

export default Navbar