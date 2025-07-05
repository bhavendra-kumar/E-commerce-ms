
import React, { useState } from 'react';
import { IoEye, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import server from '../../server';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${server}/user/login-user`, { email, password }, { withCredentials: true });
      toast.success("Login success!");
      localStorage.setItem("token", res.data.token); // ✅ Save token
      navigate("/");
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || 'Login failed!';
      toast.error(errorMessage);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='box-border flex flex-col justify-center items-center rounded-lg shadow-xl w-96 h-96 bg-slate-200'>
        <h1 className='text-2xl font-bold mb-4'>User Login</h1>
        <form onSubmit={handleSubmit} className='w-full px-6'>
          <div className='flex items-center mb-4 bg-sky-100 rounded-lg shadow-lg'>
            <input
              type='email'
              placeholder='Email'
              className='w-full p-2 focus:outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <IoMdMail className='w-6 h-6 mx-3' />
          </div>
          <div className='flex items-center mb-4 bg-sky-100 rounded-lg shadow-lg'>
            <input
              type={visible ? 'text' : 'password'}
              placeholder='Password'
              className='w-full p-2 focus:outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {visible ? (
              <IoEye className='w-6 h-6 mx-3' onClick={() => setVisible(false)} />
            ) : (
              <IoEyeOffOutline className='w-6 h-6 mx-3' onClick={() => setVisible(true)} />
            )}
          </div>
          <button
            type='submit'
            className='w-full bg-cyan-400 py-2 rounded-lg text-white font-bold shadow-md'
          >
            Submit
          </button>
          <div className='text-center mt-4'>
            <p>Don't have an account? <Link to='/signup' className='text-sky-500'>Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
