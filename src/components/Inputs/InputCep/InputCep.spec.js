import React from 'react';
import { render } from '@testing-library/react'
import * as stories from './InputCep.stories';

import { composeStories } from '@storybook/testing-react';

const { Normal, ComValor } = composeStories(stories);

describe('InputCep', () => {
  test('should render Normal state', () => {
    render(<Normal />);
  });

  test('should render WithValue state', () => {
    render(<ComValor />);
  });
})
