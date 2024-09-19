import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import nitLogo from '../assets/nitLogo.png';
import SignInModal from './SignInModal';  // Import the SignInModal component

const CollegeNavbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  // State for controlling the modal
  const [showModal, setShowModal] = useState(false);
  const [signInAs, setSignInAs] = useState('');

  const handleShowModal = (role: string) => {
    setSignInAs(role);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Scroll effect to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showSignIn, setShowSignIn] = useState(false);
  const [showAcademics, setShowAcademics] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const [showRelations, setShowRelations] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className={showNavbar ? 'navbar-show' : 'navbar-hide'}>
        <div className="navbar-content">
          <Navbar.Brand href="#home" className="navbar-logo">
            <img
              src={nitLogo}  // Path to the institute's logo
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Institute Logo"
            />
            <span>National Institute of Technology Sikkim</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="navbar-menu">
              <NavDropdown
                title="ACADEMICS"
                id="academics-dropdown"
                show={showAcademics}
                onMouseEnter={() => setShowAcademics(true)}
                onMouseLeave={() => setShowAcademics(false)}
              >
                <NavDropdown.Item href="#">Programs</NavDropdown.Item>
                <NavDropdown.Item href="#">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#">Research</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="RESEARCH"
                id="research-dropdown"
                show={showResearch}
                onMouseEnter={() => setShowResearch(true)}
                onMouseLeave={() => setShowResearch(false)}
              >
                <NavDropdown.Item href="#">Research Areas</NavDropdown.Item>
                <NavDropdown.Item href="#">Projects</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="RELATIONS"
                id="relations-dropdown"
                show={showRelations}
                onMouseEnter={() => setShowRelations(true)}
                onMouseLeave={() => setShowRelations(false)}
              >
                <NavDropdown.Item href="#">Industry Relations</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                show={showAbout}
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
              >
                <NavDropdown.Item href="#">Mission</NavDropdown.Item>
                <NavDropdown.Item href="#">Vision</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="PEOPLE"
                id="people-dropdown"
                show={showPeople}
                onMouseEnter={() => setShowPeople(true)}
                onMouseLeave={() => setShowPeople(false)}
              >
                <NavDropdown.Item href="#">Faculty</NavDropdown.Item>
                <NavDropdown.Item href="#">Staff</NavDropdown.Item>
              </NavDropdown>

              {/* Sign In dropdown */}
              <NavDropdown
                title="Sign In"
                id="signin-dropdown"
                show={showSignIn}
                onMouseEnter={() => setShowSignIn(true)}
                onMouseLeave={() => setShowSignIn(false)}
              >
                <NavDropdown.Item onClick={() => handleShowModal('Admin')}>Admin</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal('Faculty')}>Faculty</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal('Student')}>Student</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Include the SignInModal and pass props */}
      <SignInModal show={showModal} handleClose={handleCloseModal} signInAs={signInAs} />
    </>
  );
};

export default CollegeNavbar;
