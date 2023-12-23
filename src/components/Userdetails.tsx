import React, { useState, useEffect } from "react";

const Userdetails = () => {
    const savedUserData = JSON.parse(localStorage.getItem("userData")) || {};
    const [username, setUsername] = useState(savedUserData.username || "");
    const [firstName, setFirstName] = useState(savedUserData.firstName || "");
    const [lastName, setLastName] = useState(savedUserData.lastName || "");
    const [email, setEmail] = useState(savedUserData.email || "");
    const [secondaryEmail, setSecondaryEmail] = useState(
        savedUserData.secondaryEmail || ""
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username,
            firstName,
            lastName,
            email,
            secondaryEmail,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
    };
    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Secondary Email (optional):
                    <input
                        type="email"
                        value={secondaryEmail}
                        onChange={(e) => setSecondaryEmail(e.target.value)}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Userdetails;
