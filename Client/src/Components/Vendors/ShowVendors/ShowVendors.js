import './ShowVendors.css';
import Table from 'react-bootstrap/Table';

function ShowVendors() {

    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 mb-5 formDiv'>
                <div className='row mb-3'>
                    <p className='topic'>Show All Vendors</p>
                </div>
                <div className='row'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Vendor Name</th>
                                <th>Video Link</th>
                                <th>Pillors</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
            <div className='col-2'></div>
        </div>
    );

}

export default ShowVendors;