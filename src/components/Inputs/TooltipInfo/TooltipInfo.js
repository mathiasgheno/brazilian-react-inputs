import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Info } from '../icons/circle-info-solid.svg';

const Floating = styled.span`
  //display: inline;
  //display: inline;
  display: flex;
  align-items: center;
  gap: 2px;
  
  svg {
    width: var(--width-info);
    fill: var(--color-info);
  }
`;

const Container = styled.span`
  display: inline;
`;

const Exibir = css`
  visibility: visible;
`;

const Tooltip = styled.p`
  display: inline;
  height: fit-content;
  padding: 4px;
  max-width: 100px;
  background-color: black;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  margin: 0;
  visibility: hidden;
  
  position: absolute;
  top: -11px;
  width: max-content;
  min-height: 15px;
  
  ${({exibir}) => exibir && Exibir}
`;

export function TooltipInfo() {
  const [ exibirTooltip, setExibirTooltip ] = React.useState(false);
  return (
    <Container>
      <Floating>
        <Info
          onMouseEnter={() => setExibirTooltip(true)}
          onMouseLeave={() => setExibirTooltip(false)}
        />
        <span style={{ display: 'flex' }}>
          <Tooltip exibir={exibirTooltip}>Meu Tooltip</Tooltip>
        </span>
      </Floating>
    </Container>
  )
}
