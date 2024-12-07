import React, { useState, useEffect } from 'react';
import { Link,} from 'react-router-dom';
import home from '../images/home.png';
import contact from '../images/contact.png';
import cv from '../images/cv.png';
import project from '../images/project.png'
import dropdown from '../images/dropdown.png'
import login from '../images/login.png';
import register from '../images/register.png';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
    
  useEffect(() => {
    const handleLoginStateChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('loginStateChange', handleLoginStateChange);

    return () => {
      window.removeEventListener('loginStateChange', handleLoginStateChange);
    };
  }, []);

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };


function DropdownItem (props) {
  return(
    <li className='dropdownItem'>
       <img src={props.img} alt='alt'></img>
       <Link to={props.to}>{props.text}</Link>
    </li>
  );
}


  return (
    <div id='NavId'>
      <h1 id='otsikko'><span>MY</span>Resume</h1>
      {isLoggedIn ? (
        <>
          <Link onClick={handleLogout} className='log'>LOG OUT</Link>
          <Link to="/Yhteystiedot"><img src={contact} alt='Contact' className='logot'/></Link>
        </>
      ) : (
        <>
        <div className='dropdownbtn' onClick={() =>{setIsMenuVisible(!isMenuVisible)}}>
        <img src={dropdown}  alt='Dropdown' className='logot'/>
         </div>
      <div className={`dropdownmenu ${isMenuVisible ? "active" : "inactive"}`}>
        <ul className='dropdownList'>
          <DropdownItem img={login} alt="Login" text={"LOG IN"} to="/LogIn" />
          <DropdownItem img={register} alt="Register" text={"REGISTER"} to="/Register" />
        </ul>
      </div>
        </>
      )}
      <Link to="/"><img src={home} alt="Home" className='logot'/></Link>
      <Link to="/CV"><img src={cv} alt='Cv' className='logot'/></Link>
      <Link to="/Projects"><img src={project} alt='Projects' className='logot'/></Link>
  
    </div>
  );
}

export { Nav };