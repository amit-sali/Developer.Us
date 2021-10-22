import React from 'react';
import '../Styles/Navbar.css';

/*Inspiration from this code will be taken for making react components */
export default function Temporary() {
    return (<>
       <header>
		 <a class="logo" href="/"><img src="logo.svg" alt="logo"></a>
            <nav>
                <ul class="nav__links">
                    <li><a href="#">portfolios</a></li>
                    <li><a href="#">Live Projects</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </nav>
  
              <a class="cta" href="#">Log in</a>
            <p class="menu cta">Menu</p>

	</header>

    </>
    )
}
