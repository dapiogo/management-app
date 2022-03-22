import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import Button from 'components/DeleteButton/DeleteButton';

const showIndex = (index) => alert(`Person index: ${index}`);

const UsersListItem = ({ index, average, name, attendance = '0%', deleteUser }) => {
  return (
    <Wrapper key={index}>
      <StyledAverage>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)}>x</Button>
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.string.isRequired,
  average: PropTypes.number,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default UsersListItem;
