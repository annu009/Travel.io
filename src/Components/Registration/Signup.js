import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    // State to hold form data
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({}); // For form validation errors

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the registration API endpoint
            const response = await axios.post('http://127.0.0.1:8081/register/', {
                username,
                email,
                password
            });

            // Handle successful registration
            setMessage('Registration successful!');
            setErrors({});
        } catch (error) {
            // Handle errors (e.g., form validation errors)
            if (error.response && error.response.data) {
                setErrors(error.response.data);
                setMessage('Error in registration.');
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {/* Username field */}
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>


                {/* Email field */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                {/* Password field */}
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                {/* Submit button */}
                <button type="submit">Sign Up</button>
            </form>

            {/* Display message */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signup;
