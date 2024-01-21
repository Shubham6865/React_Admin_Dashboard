import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Charts from '../../components/chart/Charts';
import Table from '../../components/table/Table';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Charts aspect={2 / 1} title='last 6 Months (Revenue )' />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home
