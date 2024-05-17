import AddProducts from './AddProducts/AddProducts';
import TabPannel from '../TabPannel/TabPannle';
import './Products.css';
import ShowProducts from './ShowProducts/ShowProducts';

function Products() {

    const tabs = [
        {
            title: 'Add Products',
            eventKey: 'addProducts',
            component: <AddProducts/>
        },
        {
            title: 'Show All Products',
            eventKey: 'showProducts',
            component: <ShowProducts/>
        }
    ];

    return (
        <section>
            <div className='container '>
                <div className='row HeadingtextRow'>
                    <p>Products</p>
                </div>
                <div className='row conback'>
                    <TabPannel tabs={tabs} />
                </div>
            </div>
        </section>
    );

}

export default Products;