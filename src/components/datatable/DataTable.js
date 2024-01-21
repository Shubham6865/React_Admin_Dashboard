import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../DataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const DataTable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: '200',
        renderCell: (params) => {
            return (
                <div className="cellAction">
                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>

                    <div className="deleteButton" onClick={() => handelDelete(params.row.id)}>Delete</div>


                </div>
            )
        }
    }]

    const [data, setData] = useState(userRows)

    const handelDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className='addnewbtn'>Add New</Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 8]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable
