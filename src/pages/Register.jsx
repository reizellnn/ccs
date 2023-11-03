import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const [client_fname, setClientFname] = useState("");
    const [client_lname, setClientLname] = useState("");
    const [client_email, setClientEmail] = useState("");
    const [client_contact, setClientContact] = useState("");
    const [client_street, setClientStreet] = useState("");
    const [client_barangay, setClientBarangay] = useState("");
    const [client_city, setClientCity] = useState("");
    const [client_password, setClientPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is already logged in
        const roleID = localStorage.getItem("roleID");
        if (roleID === "ROLE001") {
            navigate("/");
        } else if (roleID === "ROLE002" || roleID === "ROLE003") {
            navigate("/dashboard");
        }
        console.log(roleID);
    }, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const {
        //     client_fname,
        //     client_lname,
        //     client_email,
        //     client_contact,
        //     client_street,
        //     client_barangay,
        //     client_city,
        //     client_password,
        //     role_id,
        // } = req.body;

        if (client_password !== confirm_password) {
            setError("Password mismatch");
            return;
        }

        const client = {
            client_fname,
            client_lname,
            client_email,
            client_contact,
            client_street,
            client_barangay,
            client_city,
            client_password,
            role_id: "ROLE001",
        };

        const response = await fetch("http://localhost:7723/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(client),
        });

        const result = await response.json();

        if (result.user) {
            window.location.href = "/login";
        }
    };

    return (
        <section className="login__section bg-blue-100">
            <div className="container mx-auto h-full flex justify-center items-center p-20">
                <div className="form__container bg-white p-10 rounded-lg shadow-2xl">
                    <div className="form__container">
                        <h1 className="text-3xl font-bold text-start">
                            Register
                        </h1>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quibusdam.
                        </p>
                        <div className="divider my-1"></div>
                        {error && (
                            <div className="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{error}</span>
                            </div>
                        )}
                        <form
                            onSubmit={handleSubmit}
                            className="form my-4 grid grid-cols-2 gap-4"
                        >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        First Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_fname"
                                    required
                                    value={client_fname}
                                    onChange={(e) =>
                                        setClientFname(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Last Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_lname"
                                    required
                                    value={client_lname}
                                    onChange={(e) =>
                                        setClientLname(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full col-span-2">
                                <label className="label">
                                    <span className="label-text">
                                        Email Address
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_email"
                                    required
                                    value={client_email}
                                    onChange={(e) =>
                                        setClientEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Contact Number
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contact Number"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_contact"
                                    required
                                    value={client_contact}
                                    onChange={(e) =>
                                        setClientContact(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Street</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Street"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_street"
                                    required
                                    value={client_street}
                                    onChange={(e) =>
                                        setClientStreet(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Barangay</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Barangay"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_barangay"
                                    required
                                    value={client_barangay}
                                    onChange={(e) =>
                                        setClientBarangay(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_city"
                                    required
                                    value={client_city}
                                    onChange={(e) =>
                                        setClientCity(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="client_password"
                                    required
                                    value={client_password}
                                    onChange={(e) =>
                                        setClientPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Confirm Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full outline-none focus:outline-none"
                                    name="confirm_password"
                                    required
                                    value={confirm_password}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-control mt-6 col-span-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <Link
                                    to="/login"
                                    className="btn btn-block btn-link no-underline"
                                >
                                    Already have an account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
