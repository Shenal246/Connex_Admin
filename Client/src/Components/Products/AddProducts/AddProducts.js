import './AddProducts.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function AddProducts() {

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectedOptions([...selectedOptions, name]);
        } else {
            setSelectedOptions(selectedOptions.filter(option => option !== name));
        }
    };

    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 mb-2 formDiv'>
                <div className='row mb-3'>
                    <p className='topic'>Add Products</p>
                </div>
                <div className='row'>
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Product Name" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        
                        <FloatingLabel controlId="floatingSelect" label="Vendor" className="mb-3">
                            <Form.Select aria-label="Floating label select">
                                <option disabled>Select a Vendor</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>

                        <Form.Group as={Row} className='CheckboxGroup mb-3'>
                            <Form.Label as="legend" column sm={3} >
                                Category Type
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Check
                                    type="checkbox"
                                    label="Surveillance & Access Control Solutions"
                                    name="option1"
                                    id="option1"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Network Switches & Wireless AP"
                                    name="option2"
                                    id="option2"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Network Cabling and Accessories"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Internet Security"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Laptops, Workstations, Desktops & Accessories"
                                    name="option1"
                                    id="option1"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Smart Home/Office & IoT Solutions"
                                    name="option2"
                                    id="option2"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Hard Disks & Storage"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Server Storage & Backup Solutions"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                            </Col>
                        </Form.Group>
                        
                        <Button variant="success" className='m-3'>Save</Button>
                        <Button variant="danger" type="reset">Clear</Button>
                    </Form>
                </div>

            </div>
            <div className='col-2'></div>
        </div>
    );

}

export default AddProducts;