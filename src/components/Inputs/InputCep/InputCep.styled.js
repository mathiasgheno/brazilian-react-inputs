import styled, { css } from 'styled-components';

export const Message = styled.span`
  color: red;
`;

const InputInvalid = css`
  border: 1px solid red;
`;

export const InputValid = css`
  border: 1px solid green;
`;

export const Input = styled.input`
  ${({invalid}) => invalid && InputInvalid};
  ${({InputValid}) => InputValid && InputValid};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
