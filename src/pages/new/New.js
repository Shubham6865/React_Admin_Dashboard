import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const New = ({ inputs, title }) => {

    const [file, setFile] = useState('')

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">{title}</h1>
                    {title === "Add New User" ? (
                        <Link to="/users" className='backbtn'>Back</Link>
                    ) : (
                        <Link to="/products" className='backbtn'>Back</Link>
                    )}

                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt="icon" />
                        {/* <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" /> */}
                    </div>
                    <div className="right">
                        <form >
                            <div className="formInput">
                                <label htmlFor='file'>Profile Image:<DriveFolderUploadOutlined className='icon' /></label>
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
                            </div>
                            {inputs.map(input => (
                                <div className="formInput" key={input.id}>

                                    <label >{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />

                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New
