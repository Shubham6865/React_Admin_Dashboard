import React, { useContext } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { AccountCircleOutlined, CreditCard, ExitToApp, InsertChart, NotificationsNone, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeReducer';


const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Shubham</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon' />
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <span> Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LIST</p>
                    <li><PersonOutlineOutlinedIcon className='icon' />
                        <Link to="/users" style={{ textDecoration: "none" }}>
                            <span> User</span>
                        </Link>
                    </li>
                    <li><StoreOutlinedIcon className='icon' />
                        <Link to="/products" style={{ textDecoration: "none" }}>
                            <span> Products</span>
                        </Link>
                    </li>
                    <li><CreditCard className='icon' />
                        <Link to="/orders" style={{ textDecoration: "none" }}>

                            <span> Orders</span>
                        </Link>
                    </li>
                    {/* <li><LocalShipping className='icon' />
                        <Link to="/delivery" style={{ textDecoration: "none" }}>
                            <span> Delivery</span>
                        </Link>
                    </li> */}
                    <p className="title">USEFUL</p>
                    <li><InsertChart className='icon' />
                        <Link to="/stats" style={{ textDecoration: "none" }}>
                            <span> Stats</span>
                        </Link>
                    </li>
                    <li><NotificationsNone className='icon' />
                        <Link to="/notifications" style={{ textDecoration: "none" }}>
                            <span> Notifications</span>
                        </Link>
                    </li>
                    <p className="title">SERVICE</p>
                    <li><SettingsSystemDaydreamOutlined className='icon' />
                        <Link to="/health" style={{ textDecoration: "none" }}>
                            <span> System Health</span>
                        </Link>
                    </li>
                    <li> <PsychologyOutlined className='icon' />
                        <Link to="/logs" style={{ textDecoration: "none" }}>
                            <span>Logs</span>
                        </Link>
                    </li>
                    <li> <SettingsApplications className='icon' />
                        <Link to="/products" style={{ textDecoration: "none" }}>
                            <span>Setting</span>
                        </Link>
                    </li>
                    <p className="title">USER</p>
                    <li> <AccountCircleOutlined className='icon' />
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li> <ExitToApp className='icon' />
                        <Link to="/logout" style={{ textDecoration: "none" }}>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
                {/* <div className="colorOption"></div> */}
            </div>
        </div>
    )
}

export default Sidebar
