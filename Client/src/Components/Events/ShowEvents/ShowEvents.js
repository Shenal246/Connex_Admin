import './ShowEvents.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";


function ShowEvents() {
    const [listOfPost,setlistOfpost]=useState([]);  
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage =5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = listOfPost.slice(firstIndex, lastIndex);
    const npage = Math.ceil(listOfPost.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

      useEffect(()=>{
     
        const values = {
          query:"SELECT news.id as nid, `title`, `type`, `name` FROM news JOIN newstype ON news.newstype_id = newstype.id JOIN status ON news.status_id = status.id ORDER BY nid ASC;",
          key : "Cr6re8VRBm"
        }
          
        axios.post("http://localhost:5000/search",values).then((response)=>{
          setlistOfpost(response.data);
         
        })
      },[]);

      function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }

    }

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
        
    }

    function changeCPage(id){
        setCurrentPage(id);
    }
      
     
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
                       
                        {records.map(({nid,title,name,type},index)=>{
                                return(
                               <tr key={index}>
                                <td>{nid}</td>
                                <td>{title}</td>
                                <td>{type}</td>
                                <td>{name}</td>
                                <td>
                                    
                                <input type="checkbox" checked data-toggle="toggle" data-size="xs"/>
                                </td>
                               </tr>
                                )
                                })}
                                                        
                        </tbody>
                    </Table>
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href='#' className='page-link' onClick={prePage}>Prev</a>
                            </li>
                            {
                                numbers.map((n, i)=> (
                                    <li className={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
                                        <a href='#' className='page-link' onClick={()=> changeCPage(n)}>{n}</a>
                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <a href='#' className='page-link' onClick={nextPage}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className='col-2'>

        
            </div>
        </div>
    );

}

export default ShowEvents;