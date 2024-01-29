import { Grid } from '@mui/material';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Profile.scss';

const Profile = () => {
    return (
        <div className='profile'>
            <Sidebar />
            <div className="profileContainer">

                <Navbar />

                <Grid container spacing={0}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ border: '1px solid red' }}>
                   
                </Grid>
            </div>
        </div>
    )
}

export default Profile
