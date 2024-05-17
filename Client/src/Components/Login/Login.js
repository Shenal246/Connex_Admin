import './Login.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function Login() {

    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className='loginContainer m-5'>
                            <div className='row'>
                                <p className='headingText'>Connex Admin</p>
                            </div>
                            <div className='row'>
                                <Form>
                                    <FloatingLabel controlId="username" label="User name" className="mb-3">
                                        <Form.Control type="text" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="password" label="Password" className="mb-2">
                                        <Form.Control type="password" />
                                    </FloatingLabel><br />
                                    <a href='#' className='fogetText'>Forget Password ?</a><br />

                                    <Button variant="success" className='m-3 buttons'>Login</Button>
                                    <Button variant="danger" className='m-3 buttons' type="reset">Clear</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>

            </div>
        </section>
    );

}

export default Login;