import React, { useState } from 'react';
import UsersList from 'components/UsersList/UsersList';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/Form/Form';
import { users as userData } from 'data/users';

export const Wrapper = styled.div`
  background: #f78faf;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: ${() => `${window.innerWidth / 2}px`}; */
  height: 100vh;
`;

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formValue, setFormValue] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const deleteUser = (name) => {
    const filteredUsers = users.filter((el) => el.name !== name);
    setUsers(filteredUsers);
  };

  const handleChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const everyFieldIsFill = Object.values(formValue).every(Boolean);
    if (everyFieldIsFill) {
      setUsers((prev) => [...prev, formValue]);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/add-user">add users</Link>
            </nav>
          </div>

          <Routes>
            <Route exact path="/" element={<UsersList users={users} deleteUser={deleteUser} />} />
            <Route exact path="/add-user" element={<Form handleSubmit={handleSubmit} handleChange={handleChange} formValue={formValue} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
