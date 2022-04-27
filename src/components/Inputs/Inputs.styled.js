import styled, { css } from 'styled-components';

export const Invalid = css`
  border: 1px solid red;
`;

export const Valid = css`
  border: 1px solid green;
`;

export const Warning = css`
  border: 1px solid #bbbb03;
`;

export const Message = styled.span`
  font-size: var(--font-size-message);

  ${({invalid}) => invalid && css`color: red;`};
  ${({valid}) => valid && css`color: green;`};
  ${({warning}) => warning && css`color: #bbbb03;`};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 2px;
`;
