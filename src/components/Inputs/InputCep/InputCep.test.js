import React from 'react';
import { render, screen } from '@testing-library/react'
import { InputCep } from './InputCep';
import * as stories from './InputCep.stories';

import { composeStories } from '@storybook/testing-react';

const { Normal, WithValue } = composeStories(stories);

describe('InputCep', () => {
  test('should render Normal state', () => {
    render(<Normal />);
  });

  test('should render WithValue state', () => {
    render(<WithValue />);
    screen.debug();
    // console.log(screen.getByRole('zipcode'));
  });
})
