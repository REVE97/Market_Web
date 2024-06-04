import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });
      console.log('Login successful');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      
      // 로그인 성공 시 페이지 이동
      navigate('/dashboard');
    } catch (error) {
      console.error('An error occurred:', error.response);
      alert('로그인 실패');
    }
  };

  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-10">로그인</div>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block mb-2 font-bold">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          로그인
        </button>
      </form>
      <div className="mt-4 text-center">
        <div className="text-gray-800 border border-gray-800 py-2 cursor-pointer">
          회원가입
        </div>
      </div>
    </div>
  );
};

export default Login;
