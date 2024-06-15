import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>회원가입</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname : </label>
          <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
        </div>
        <div>
          <label>ID : </label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
