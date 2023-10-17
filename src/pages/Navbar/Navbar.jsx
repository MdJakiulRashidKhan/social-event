import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/user.png';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then((res) => {
                console.log(res.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className="text-white hover:text-blue-500">Home</NavLink></li>
            <li><NavLink to="/login" className="text-white hover:text-blue-500">Login</NavLink></li>
            <li><NavLink to="/register" className="text-white hover:text-blue-500">Register</NavLink></li>
        </>
    );

    return (
        <nav className="bg-blue-600 p-4">
            <div className="flex items-center justify-between">
                <div className="lg:hidden">
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
                <Link to="/" className="text-2xl font-bold text-white hover:text-blue-500">
                    Social<span className="text-red-600">Events</span>
                </Link>
                <ul className="hidden lg:flex space-x-4">
                    {navLinks}
                </ul>
                <div className="flex items-center space-x-4">
                    <label className="text-white">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={userImg} alt="User" />
                        </div>
                    </label>
                    {user ? (
                        <button onClick={handleSignOut} className="btn btn-red">Sign Out</button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
