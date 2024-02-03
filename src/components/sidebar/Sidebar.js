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
                    <span className='logo full'>Shubham</span>
                    <span className='logo half'>SP</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/" style={{ textDecoration: "none" }}>
                        <DashboardIcon className='icon' />
                            <span> Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span> User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" style={{ textDecoration: "none" }}>
                        <StoreOutlinedIcon className='icon' />
                        <span> Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" style={{ textDecoration: "none" }}>
                        <CreditCard className='icon' />
                        <span> Orders</span>
                        </Link>
                    </li>
                    {/* <li><LocalShipping className='icon' />
                        <Link to="/delivery" style={{ textDecoration: "none" }}>
                            <span> Delivery</span>
                        </Link>
                    </li> */}
                    <p className="title">USEFUL</p>
                    <li>
                        <Link to="/stats" style={{ textDecoration: "none" }}>
                        <InsertChart className='icon' />
                            <span> Stats</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/notifications" style={{ textDecoration: "none" }}>
                        <NotificationsNone className='icon' />
                        <span> Notifications</span>
                        </Link>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <Link to="/health" style={{ textDecoration: "none" }}>
                        <SettingsSystemDaydreamOutlined className='icon' />
                        <span> System Health</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logs" style={{ textDecoration: "none" }}>
                        <PsychologyOutlined className='icon' />
                        <span>Logs</span>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/products" style={{ textDecoration: "none" }}>
                        <SettingsApplications className='icon' />
                            <span>Setting</span>
                        </Link>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Link to="/profile" style={{ textDecoration: "none" }}>
                        <AccountCircleOutlined className='icon' />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" style={{ textDecoration: "none" }}>
                        <ExitToApp className='icon' />
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
