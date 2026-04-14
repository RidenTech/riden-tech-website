import { useState, useEffect, useRef } from 'react';
import { FiLock, FiMail, FiLogIn, FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import BlogManager from 'components/BlogManager';
import gsap from 'gsap';

const AdminLogin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isClient, setIsClient] = useState(false);

    const loginCardRef = useRef(null);
    const errorRef = useRef(null);
    const spinnerRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            try {
                const token = localStorage.getItem('admin-token');
                setIsAuthenticated(!!token);
            } catch (error) {
                console.error('Error accessing localStorage:', error);
                setIsAuthenticated(false);
            }
        }
    }, [isClient]);

    useEffect(() => {
        if (loginCardRef.current && !isAuthenticated && isClient) {
            gsap.fromTo(loginCardRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isAuthenticated, isClient]);

    useEffect(() => {
        if (error && errorRef.current) {
            gsap.fromTo(errorRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
        }
    }, [error]);

    useEffect(() => {
        if (isLoading && spinnerRef.current) {
            gsap.to(spinnerRef.current, {
                rotation: 360,
                duration: 1,
                repeat: -1,
                ease: "linear"
            });
        }
    }, [isLoading]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('admin-token', data.token);
                localStorage.setItem('admin-user', JSON.stringify(data));
                setIsAuthenticated(true);
                setError('');
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Connection error. Is the backend running?');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('admin-token');
            localStorage.removeItem('admin-user');
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
        setIsAuthenticated(false);
        setFormData({ username: '', password: '' });
    };

    if (!isClient) {
        return null;
    }

    if (isAuthenticated) {
        return (
            <div className="min-h-screen bg-white">
                <div className="bg-gradient-to-r from-gray-900 to-black text-white border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <LuSparkles className="text-2xl text-white" />
                                <span className=" text-xl">Admin Dashboard</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm flex items-center border border-gray-700"
                            >
                                <FiLock className="mr-2" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <BlogManager />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div
                ref={loginCardRef}
                className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-200"
            >
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gray-900/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gray-800/5 rounded-full blur-2xl" />

                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-gradient-to-br from-gray-900/5 to-gray-600/5 rounded-2xl mb-4 border border-gray-100">
                        <LuSparkles className="text-3xl text-gray-900" />
                    </div>
                    <h1 className=" text-3xl text-gray-900 mb-2">
                        Admin <span className="text-gray-500">Access</span>
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Enter your credentials to manage blog posts
                    </p>
                </div>

                {error && (
                    <div
                        ref={errorRef}
                        className="mb-6 p-3 bg-gray-100 border border-gray-200 rounded-lg flex items-center text-gray-800 text-sm"
                    >
                        <FiAlertCircle className="mr-2 flex-shrink-0 text-gray-700" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Username
                        </label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                placeholder="Admin Username"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-white text-gray-900 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-colors bg-white text-gray-900 placeholder-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <button
                            type="button"
                            onClick={() => alert(`Please contact technical support to reset your password.`)}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed border border-gray-800"
                    >
                        {isLoading ? (
                            <div
                                ref={spinnerRef}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                        ) : (
                            <>
                                <FiLogIn className="mr-2" />
                                Sign In
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-6">
                    © {new Date().getFullYear()} RidenTech. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
