import './AddVendors.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function AddVendors() {

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
                    <p className='topic'>Add Vendors</p>
                </div>
                <div className='row'>
                    <Form>
                        <FloatingLabel controlId="vName" label="Vendor Name" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="vLink" label="Vendor Link" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="description" label="Description" className="mb-3">
                            <Form.Control as="textarea" />
                        </FloatingLabel>

                        <Form.Group as={Row} className='CheckboxGroup mb-3'>
                            <Form.Label as="legend" column sm={2} >
                                Pillor Type
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="checkbox"
                                    label="Perimeter and Internal Security"
                                    name="option1"
                                    id="option1"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Cyber Security Governance & Compliance"
                                    name="option2"
                                    id="option2"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Authentication & Identity Management"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Security Management"
                                    name="option3"
                                    id="option3"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Endpoint Security"
                                    name="option1"
                                    id="option1"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Networking"
                                    name="option2"
                                    id="option2"
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Data Center Infrastructure and Infrastructure Monitoring"
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

export default AddVendors;