import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // axios 경로 수정필요
      const response = await axios.post('', { id, password });
      alert('로그인에 성공했습니다.', response.data);
      
      navigate('/'); // 로그인 후 이동할 페이지 설정
    } catch (error) {
      setError('로그인에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>ID</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
