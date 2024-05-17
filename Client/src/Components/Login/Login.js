import './Login.css';
import React, { useState, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthContext';
import { useHistory } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ login ] = useContext(AuthContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            history.push('/protected');
        } catch (err) {
            console.error('Login failed', err);
        }
    };

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
                                <Form onSubmit={handleSubmit}>
                                    <FloatingLabel controlId="username" label="User name" className="mb-3">
                                        <Form.Control 
                                            type="text" 
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="password" label="Password" className="mb-2">
                                        <Form.Control 
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </FloatingLabel><br/>
                                    <a href='#' className='fogetText'>Forget Password ?</a><br/>
                                    <Button variant="success" type="submit" className='m-3 buttons'>Login</Button>
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
