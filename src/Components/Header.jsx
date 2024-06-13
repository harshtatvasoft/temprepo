import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../assets/logo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DonateIcon from '../assets/donation.png';
const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='border'>
            <div className='d-flex justify-content-between mx-2 my-2'>
                <div className='d-flex'>
                    <button type="button" onClick={handleShow} className="btn text-black d-block d-md-none">
                        <i className="bi bi-justify-left text-black"></i>
                    </button>
                    <img width="300px" className='m-auto pb-1 d-none d-md-block' src={logo} alt="Logo" />
                    <img width="150px" className='m-auto pb-1 d-block d-md-none' src={logo} alt="Logo" />
                </div>
                <div className='d-block d-md-none'>
                    <Link><button className=' rounded border ToggleBtnDonate p-1'><img src={DonateIcon} className=''></img></button></Link>
                </div>
                <div className='d-md-block d-none'>
                    <div className='d-flex'>
                        <div>
                            <Link to="/categories">
                                <Dropdown>
                                    <Dropdown.Toggle variant='white' className='Headerbtn' id="dropdown-basic">
                                        Categories
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownmenu'>
                                        <Dropdown.Item className='dropdownitem' href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item className='dropdownitem' href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item className='dropdownitem' href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Link>
                        </div>
                        <div> <Link to="/aboutus"><button className='Headerbtn'>About Us</button></Link></div>
                        <div><Link to="/contactus"><button className='Headerbtn'>Contact Us</button></Link></div>
                        <div> <Link><button className='Headerbtn text-white rounded' id='DonateNowBtn'>Donate Now</button></Link></div>
                    </div>
                </div>
                <Offcanvas className='offcanvas' show={show} onHide={handleClose}>
                    <Offcanvas.Body>
                        <div>
                            <Link to="/aboutus"><button className='Headerbtn'><i className="bi bi-person p-1 fs-3"></i>About Us</button>
                            </Link>
                        </div>
                        <div><Link to="/contactus"><button className='Headerbtn'><i className="bi bi-person-lines-fill p-1 fs-3"></i>Contact Us</button></Link>
                        </div> 
                        <div>
                            <Link to="/categories">
                                <Dropdown>
                                    <Dropdown.Toggle variant='white' className='Headerbtn' id="dropdown-basic">
                                        <i className="bi bi-journal-bookmark p-1 fs-3"></i>Categories
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownmenu'>
                                        <Dropdown.Item className='dropdownitem' href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item className='dropdownitem' href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item className='dropdownitem' href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Link>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
}
export default Header;



