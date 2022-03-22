import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey || 'grey'};
  border-radius: ${({ borderRadius }) => borderRadius || '50%'};
  svg {
    width: 100%;
    height: 100%;
  }
`;
