import React from 'react';
import '../Styles/Temporary.css';

/*Inspiration from this code will be taken for making react components */
export default function Temporary() {
    return (<>
        <header>
            <a className="logo" href="/">Developer Us</a>
            <nav>
                <ul className="nav__links">
                    <li><a href="#">portfolios</a></li>
                    <li><a href="#">Live Projects</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
            </nav>
            <a className="cta" href="#">Log in</a>
            <p className="menu cta">Menu</p>
        </header>

        <div className="container glass">
            <h1>purpose </h1>
        </div>

        <div className="container glass">
            <h1>this area is for introduction</h1>
        </div>

        <footer>
            <div className="column">

                <p>Contact us</p>

                <ul >
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="column">

                <p>teams</p>
                <ul>
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>Languages</li>
                    <li>CS Subjects</li>

                </ul>
            </div>

            <div className="column">
                <p>write us </p>
                <label>write here</label>
                <br />
                <input className="writeus" type="text" />
                <br />
                <br />
                <input className="gmail" type="email" />
                <button className="custom-btn btn-13" type="button">send</button>
            </div>
        </footer>
    </>
    )
}
