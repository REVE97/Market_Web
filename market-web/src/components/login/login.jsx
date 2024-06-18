import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // axios 경로 수정필요
      const response = await axios.post('', { id, password });
      const token = response.data.token;
      
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', token);

      // 닉네임 가져오기
      const nicknameResponse = await axios.get('', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const nickname = nicknameResponse.data.nickname;
      setNickname(nickname);

      alert(`로그인에 성공했습니다. 닉네임: ${nickname}`);
      
      navigate('/'); // 로그인 후 이동할 페이지 설정

    } catch (error) {
      setError('로그인에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
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
        <div className="button-group">
          <button type="submit" className="login-button">로그인</button>
          <button type="button" className="signup-button" onClick={handleSignup}>회원가입</button>
        </div>
      </form>
      
      {nickname && <p className="welcome-message">환영합니다, {nickname}님!</p>}
    </div>
  );
};

export default Login;

