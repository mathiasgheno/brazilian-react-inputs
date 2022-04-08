import styled, { css } from 'styled-components';

export const Message = styled.span`
  font-size: var(--font-size-message);
  color: red;
`;

const InputInvalid = css`
  border: 1px solid red;
`;

export const InputValid = css`
  border: 1px solid green;
`;

export const Input = styled.input`
  border-radius: var(--border-radius-input);
  border: var(--border-input);
  height: var(--height-input);
  
  ${({invalid}) => invalid && InputInvalid};
  ${({valid}) => valid && InputValid};
`;

export const Container = styled.div`

  // Info
  --gap-icon-info: 2px;
  --width-info: 10px;
  --color-info: #b2b208;

  // Input
  --border-input: 1px solid #a2a1a1;
  --border-radius-input: 5px;
  --height-input: 30px;

  //mensagem
  --font-size-message: 14px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoBox = styled.span`
  svg {
    width: var(--width-info);
    fill: var(--color-info);
  }
`;
