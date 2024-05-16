import React from 'react';
import './TabPannel.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabPannel({ tabs }) {
    return (
        <Tabs
            defaultActiveKey={tabs[0].eventKey}
            id="uncontrolled-tab-example"
            className="m-3"
        >
            {tabs.map((tab, index) => (
                <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
                    {tab.component}
                </Tab>
            ))}
        </Tabs>
    );
}

export default TabPannel;
