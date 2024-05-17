import AddProducts from './AddProducts/AddProducts';
import TabPannel from '../TabPannel/TabPannle';
import './Products.css';
import ShowProducts from './ShowProducts/ShowProducts';

function Products() {

    const tabs = [
        {
            title: 'Add Products & News',
            eventKey: 'addProducts',
            component: <AddProducts/>
        },
        {
            title: 'Show All News',
            eventKey: 'showvendors',
            component: <ShowProducts/>
        }
    ];

    return (
        <section>
            <div className='container '>
                <div className='row HeadingtextRow'>
                    <p>Products & News</p>
                </div>
                <div className='row conback'>
                    <TabPannel tabs={tabs} />
                </div>
            </div>
        </section>
    );

}

export default Products;