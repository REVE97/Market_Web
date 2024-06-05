import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:1337/api/markets', {
        name: name,
        email: email,
        password: password,
      });
      console.log('Login successful');
      
      // 로그인 성공 시 페이지 이동
      navigate('/');
    } catch (error) {
      console.error('An error occurred:', error.response);
      alert('로그인 실패');
    }
  };

  // axios.get("http://localhost:1337/api/markets").then((response) => {
  // console.log(response);
  // });

  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-10">로그인</div>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">Name: </label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">Email: </label>
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
          <label htmlFor="password" className="block mb-2 font-bold">Password: </label>
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
  
    </div>
  );
};

export default Login;
