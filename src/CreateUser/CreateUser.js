import React from 'react'
import './CreateUser.css';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const navigate = useNavigate();
    const handleCreateUserClick = () => {
        navigate('/membership-form'); // Redirect to membership form
    };

    return (
        <div className='create-user'>
            <div>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>Total Registrations : </span>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}> 22</span>
            </div>
            <div className='next-button'>
                <button type="button" onClick={handleCreateUserClick} className="create-user-button">
                    Create User
                </button>
            </div>
        </div>
    )
}

export default CreateUser
