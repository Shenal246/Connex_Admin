import './AddVendors.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddVendors() {

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