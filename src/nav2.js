import React from 'react';
import './nav1.css'
function Nav2(){
    return(
        <div>
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#Logout">Logout</a></li>
                </ul>
                <div>
                    <h2>Fixed Full-height Side Nav</h2>
                    <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
                    <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
                    
                </div>
        </div>
    )
}

export default Nav2;