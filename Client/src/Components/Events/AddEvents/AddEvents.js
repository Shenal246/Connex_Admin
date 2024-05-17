import './AddEvents.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Yup from'yup';
import { useFormik } from 'formik';
import axios from "axios";
import React  from 'react';
import { useNavigate } from "react-router-dom";

const validationSchema =Yup.object({
    value1: Yup.string().required(" * Required"),
    value2: Yup.string().required(" * Required"),
    value3: Yup.string().required(" * Required"),
    value4: Yup.string().required(" * Required")
    
});

function AddEvents() {
    const navigate = useNavigate();
    const input1 =null;
    const formik = useFormik({
        initialValues: {
            query:"INSERT INTO `news`(`title`, `nlink`, `newstype_id`, `status_id`) VALUES (?,?,?,?)",
            value1:'',
            value2:'',
            value3:'',
            value4:'',
              key : "FKoaDwCi7C"
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
           await axios.post("https://localhost:5000/insert",values).then((response)=>{
               
                alert("News & Event Added SuccessFully");
                navigate("")
               
             })
          console.log(values);
           
              
        },
       
      });

    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 mb-2 formDiv'>
                <div className='row mb-3'>
                    <p className='topic'>Add Events and News</p>
                </div>
                <div className='row'>





                    
                    <Form onSubmit={formik.handleSubmit}>
                    {formik.touched.value1 && formik.errors.value1 ? (
                                <div className='ermsg'>{formik.errors.value1}</div>
                                ) : null}
                        <FloatingLabel id="value1" label="Title" className="mb-3">
                            <Form.Control type="text" 
                            autoComplete='off' 
                            id="value1"
                           name="value1"
                           ref={input1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}  
                           placeholder='Enter Title1 here ...'
                            />
                        </FloatingLabel>
                        {formik.touched.value2 && formik.errors.value2 ? (
                        <div className='ermsg'>{formik.errors.value2}</div>
                        ) : null}
                        <FloatingLabel id="value2" label="Video Link" className="mb-3">
                            <Form.Control type="text" 
                            autoComplete='off' 
                            id="value2"
                           name="value2"
                           ref={input1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}  
                           placeholder='Enter Title2 here ...'/>
                        </FloatingLabel>
                        {formik.touched.value2 && formik.errors.value3 ? (
                        <div className='ermsg'>{formik.errors.value3}</div>
                        ) : null}
                        <FloatingLabel id="value3" label="News Type" className="mb-3">
                            <Form.Select aria-label="Floating label select"
                            autoComplete='off' 
                            id="value3"
                           name="value3"
                           ref={input1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}  
                           placeholder='Enter Title here ...'>
                                <option>Select a News Type</option>
                                <option value="1">Lates</option>
                                <option value="2">Lates 1</option>
                                <option value="3">lates 2</option>
                                <option value="3">lates 3</option>
                                <option value="3">lates 4</option>
                            </Form.Select>
                        </FloatingLabel>
                        {formik.touched.value2 && formik.errors.value4 ? (
                        <div className='ermsg'>{formik.errors.value4}</div>
                        ) : null}
                        <FloatingLabel id="value4" label="Status" className="mb-3">
                            <Form.Select aria-label="Floating label select"
                            autoComplete='off' 
                            id="value4"
                           name="value4"
                           ref={input1}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.name}  
                           placeholder='Enter Title here ...'>
                                <option>Select the status</option>
                                <option value="1">Enable</option>
                                <option value="2">Disable</option>
                               
                            </Form.Select>
                        </FloatingLabel>
                        <Button variant="success" type='submit' className='m-3'>Save</Button>
                        <Button variant="danger" type="reset">Clear</Button>
                    </Form>
                </div>

            </div>
            <div className='col-2'></div>
        </div>
    );

}

export default AddEvents;