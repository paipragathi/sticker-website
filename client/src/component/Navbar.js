// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function ColorSchemesExample() {
  return (
    <>
    <Navbar style={{ background: "linear-gradient(to left, #404040,	#D3D3D3)", height: "60px",width: "100%" ,padding: "20px",top: "0"}} >   
  <Navbar.Brand href="home" style={{  padding: "8px 70px 20px 0px ",  fontSize: "50px", fontFamily: "Fantasy"}} >STICK-me</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="about" style={{ fontSize: "20px", marginLeft: "40px"}}>About</Nav.Link>
      <Nav.Link href="login"  style={{  fontSize: "20px"}}>Login</Nav.Link>
      <Nav.Link href="signup"  style={{ fontSize: "20px"}}>Signup</Nav.Link>
      <Nav.Link href="contact" style={{  marginRight: "100px", fontSize: "20px"}}>Contact</Nav.Link>
    </Nav>
   
      <Form inline >
      <div className='d-flex'>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ margin: "0px 0px 0px 150px"}} />
        <Button variant="outline-light">Search</Button>
         </div>
         </Form>
  </Navbar.Collapse>
</Navbar>

</>
  );
}

export default ColorSchemesExample;

// import React, { useState, useEffect } from 'react';
// import { Button } from '../Button';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//     return (
//         <>
//             <nav className='navbar'>
//                 <div className='navbar-container'>
//                     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//                         FaceAuth
//                     </Link>
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                     </div>
//                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                 Home
//                             </Link>
//                         </li>
                        
//                         <li className='nav-item'>
//                             <Link
//                                 to='/About'
//                                 className='nav-links'
//                                 onClick={closeMobileMenu}
//                             >
//                                 About Us
//                             </Link>
//                         </li>

//                         <li className='signUp'>
//                             <Link
//                                 to='/sign-up'
//                                 className='nav-links-mobile'
//                                 onClick={closeMobileMenu}
//                             >
//                                 Sign Up
//                             </Link>
//                         </li>
//                     </ul>
//                     {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;