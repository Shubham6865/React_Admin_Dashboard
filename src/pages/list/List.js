import React from 'react';
import './List.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';
import { userColumns, userRows } from '../../DataTableSource';


const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTable userColumns={userColumns} userRows={userRows} title="Add New User" />

            </div>
        </div>
    )
}

export default List
