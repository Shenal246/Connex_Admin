import AddVendors from './AddVendors/AddVendors';
import TabPannel from '../TabPannel/TabPannle';
import './Vendor.css';
import ShowVendors from './ShowVendors/ShowVendors';

function Vendors() {

    const tabs = [
        {
            title: 'Add Vendors',
            eventKey: 'addVendors',
            component: <AddVendors />
        },
        {
            title: 'Show All Vendors',
            eventKey: 'showvendors',
            component: <ShowVendors />
        }
    ];

    return (
        <section>
            <div className='container '>
                <div className='row HeadingtextRow'>
                    <p>Vendors</p>
                </div>
                <div className='row conback'>
                    <TabPannel tabs={tabs} />
                </div>
            </div>
        </section>
    );

}

export default Vendors;