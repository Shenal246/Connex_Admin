import './ShowEvents.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";

function ShowEvents() {
    const [listOfPost,setlistOfpost]=useState([]);  
    
      useEffect(()=>{
     
        const values = {
          query:"SELECT * FROM `news`;",
          key : "Cr6re8VRBm"
        }
          
        axios.post("http://localhost:5000/search",values).then((response)=>{
          setlistOfpost(response.data);
          console.log(response.data);
        })
      },[]);
     
    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 mb-5 formDiv'>
                <div className='row mb-3'>
                    <p className='topic'>Show Events and News</p>
                </div>
                <div className='row'>
                    <Table >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Video Type</th>
                                <th>Status</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody className='tbl'>
                       
                        {listOfPost.map(({title,nlink,newstype_id,status_id,id},index)=>{
                                return(
                               <tr key={index}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{newstype_id}</td>
                                <td>{status_id}</td>
                               </tr>
                                )
                                })}
                                                        
                        </tbody>
                    </Table>
                </div>

            </div>
            <div className='col-2'>

        
            </div>
        </div>
    );

}

export default ShowEvents;