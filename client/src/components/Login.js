import React, { useRef } from 'react';

const Login = ({ onIdSubmit }) => {
    const idRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        onIdSubmit(idRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your ID</label>
                    <input type="text" name="id" ref={idRef} required />
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="button">Create New ID</button>
                </div>
            </form>
        </div>
    )
};

export default Login;