import React from 'react';
import './Products.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';
import { productsColumns, productsRows } from '../../DataTableSource';


const Products = () => {
    return (
        <div className="products">
            <Sidebar />
            <div className="productsContainer">
                <Navbar />
                <DataTable userColumns={productsColumns} userRows={productsRows} title="Add New Product" />

            </div>
        </div>
    )
}

export default Products
