import AddEvents from './AddEvents/AddEvents';
import TabPannel from '../TabPannel/TabPannle';
import './Events.css';
import ShowEvents from './ShowEvents/ShowEvents';

function Events() {

    const tabs = [
        {
            title: 'Add Events & News',
            eventKey: 'addevents',
            component: <AddEvents/>
        },
        {
            title: 'Show All News',
            eventKey: 'showvendors',
            component: <ShowEvents/>
        }
    ];

    return (
        <section>
            <div className='container '>
                <div className='row HeadingtextRow'>
                    <p>Events & News</p>
                </div>
                <div className='row conback'>
                    <TabPannel tabs={tabs} />
                </div>
            </div>
        </section>
    );

}

export default Events;