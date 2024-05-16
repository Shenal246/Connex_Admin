import './AddEvents.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddEvents() {

    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 mb-2 formDiv'>
                <div className='row mb-3'>
                    <p className='topic'>Add Events and News</p>
                </div>
                <div className='row'>
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Video Link" className="mb-3">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" label="News Type" className="mb-3">
                            <Form.Select aria-label="Floating label select">
                                <option>Select a News Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" label="Status" className="mb-3">
                            <Form.Select aria-label="Floating label select">
                                <option>Select the status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
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

export default AddEvents;