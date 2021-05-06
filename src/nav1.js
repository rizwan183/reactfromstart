import React from 'react';
import './nav1.css'
function Nav1(){
    return(
        <div>
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <div>
                    <h2>Fixed Full-height Side Nav</h2>
                    <p>Some text..</p>
                    <p>Some text..</p>
                    <p>Some text..</p>
                </div>
        </div>
    )
}

export default Nav1;