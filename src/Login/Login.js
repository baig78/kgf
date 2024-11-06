import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [selectedOption, setSelectedOption] = useState('');
    const [showForm, setShowForm] = useState(false);
    const handleDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        setShowForm(value !== ''); // Show form if any option is selected
    };
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/create-user'); // Redirect to membership form
    };

    return (
        <div className="dropdown-login-container">
            <div className="dropdown-container">
                <label htmlFor="dropdown">Select Coordinator:</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">-- Select --</option>
                    <option value="test1">Mandal</option>
                    <option value="test2">State</option>
                    <option value="test3">District</option>
                </select>
            </div>
            {showForm && (
                <div className="login-container">
                    <div className="login-card">
                        <h2>Welcome Back</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required />
                            </div>
                            <button type="button" className="login-button" onClick={handleLoginClick}>
                                Login
                            </button>
                        </form>
                        <p className="forgot-password">
                            <a href="/forgot-password">Forgot password?</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
