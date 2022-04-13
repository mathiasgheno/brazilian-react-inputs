import styled from 'styled-components';
import { Invalid, Valid, Warning } from '../Inputs.styled';

export const Input = styled.input`
  border-radius: var(--border-radius-input);
  border: var(--border-input);
  height: var(--height-input);
  
  ${({invalid}) => invalid && Invalid};
  ${({valid}) => valid && Valid};
  ${({warning}) => warning && Warning};
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
