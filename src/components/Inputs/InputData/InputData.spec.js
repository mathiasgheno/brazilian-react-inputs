import * as stories from './InputData.stories';
import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

const { Normal } = composeStories(stories);

describe('InputData', () => {
  test('should render Normal state', () => {
    render(<Normal />);
  });
});
