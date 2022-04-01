import React from 'react';
import { InputCep } from './InputCep';

export default {
  title: 'InputCep',
  component: InputCep,
}

const Template = (args) => <InputCep {...args} />

export const Normal = Template.bind({});

export const WithValue = Template.bind({});

WithValue.args = {
  value: '00000000',
}

//veja: https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86
