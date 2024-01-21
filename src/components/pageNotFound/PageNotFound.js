import { Link } from 'react-router-dom';
import './PageNotFound.scss';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <Sidebar />
            <div className="pagenotfoundContainer">
                <Navbar />
                <Link to="/" className='pnp404'>
                    <span className='logo'>Click here to return home page</span>
                </Link>
            </div>

        </div>
    )
}

export default PageNotFound
