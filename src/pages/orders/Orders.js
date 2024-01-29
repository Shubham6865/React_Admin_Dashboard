
import CustomCard from '../../components/customcard/CustomCard'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Orders.scss'
import { orders } from '../../DataTableSource'
import { Link } from 'react-router-dom'


const Orders = () => {

    return (
        <div className="orders" >
            <Sidebar />
            <div className="ordersContainer " >
                <Navbar />

                <div className="top">
                    <h1 className="title">Orders</h1>
                    <Link to="/" className='backbtn'>Back</Link>
                </div>
                <div style={{ margin: '20px' }} >

                    <CustomCard orders={orders} />
                </div>

            </div>
        </div>
    )
}

export default Orders
