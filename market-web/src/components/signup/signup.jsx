import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../signup/signup.css';

export const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // axois 경로 수정필요  
      const response = await axios.post('', { nickname, id, password });
      alert('Signup successful:', response.data);
      
      navigate('/login'); // 회원가입 후 이동할 페이지 설정
    } catch (error) {
      setError('회원가입에 실패하였습니다.');
    }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Nickname</label>
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>ID</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
