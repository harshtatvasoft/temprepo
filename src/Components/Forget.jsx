
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { TextField, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Forget.css";

export default function Forget() {
  
  return (
    <>
        <div className='header-forget-bg d-flex justify-content-center align-content-center align-items-center '>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-5 py-5 bg-light  shadow rounded'>
                <Container className="pb-5 py-2 px-sm-2">
                   <div className='d-flex justify-content-center'>
                     <img alt="Logo" src={logoImage} height={55} className="mt-2" />
                   </div>
                   <Row className="justify-content-md-center">
                        <Col md={8} className='my-2 d-flex justify-content-start'>
                            <Link to="/" className='backbtn rounded p-2 my-2' variant="outlined" >&lt; Back</Link>
                        </Col>
                    </Row>
                    <header className=" text-success text-center pt-1 pb-4">
                        <Typography variant='Containt' className='header-forget'>Forget Password</Typography>
                    </header>
                    <Row className="justify-content-md-center">
                        <Col md={8}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <TextField fullWidth label="Email" type="email" variant="outlined" />
                                </Form.Group>
                                <Button variant="contained" id='register-button' className='w-100 my-3 mb-5  py-2 text-white rounded' type="submit">Reset Password</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
       </>
  );
}

