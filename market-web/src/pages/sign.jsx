import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// 회원가입 CSS <--
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
// -->

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post('http://localhost:1337/api/markets', {
        name: name,
        email: email,
        password: password
      });
      alert('User registered:', response.data);
    } catch (error) {
      alert.error('An error occurred:', error.response);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <FormGroup>
        <Label>Name:</Label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password:</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default Signup;
