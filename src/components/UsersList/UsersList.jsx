import React from 'react';
import PropTypes from 'prop-types';
import { users as userData } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';
import { useState } from 'react';

const UsersList = ({ deleteUser = () => {}, users }) => {
  return (
    <>
      <Wrapper>
        <StyledList>
          {users.map((user, index) => (
            <UsersListItem {...user} index={index} deleteUser={deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {};

export default UsersList;
