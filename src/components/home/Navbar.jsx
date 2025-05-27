import  './navbar.css'; 

import { NavLink } from 'react-router-dom';
export default function Navbar() {
  
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/"><h2 style={{color:'rgba(185, 113, 218, 0.53)'}}>LearnHub</h2></a>
                </div>
                <div className="nav-links">
                    <ul class="extras">
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/courses" className="nav-link">Courses</NavLink></li>
                    <li><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>    

                <div class="auth-links">
                    <i class="fa solid fa-magnifying-glass"></i>
                    <i className="fa solid fa-sun"></i>
                    <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                    <li><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
                </div>
                
            </div>
        </nav>
    );
}