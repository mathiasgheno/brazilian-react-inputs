import React from 'react';
import { InputCep } from './InputCep';

export default {
  title: 'InputCep',
  component: InputCep,
}

const Template = (props) => <InputCep {...props} />

export const Normal = Template.bind({});

export const WithValue = Template.bind({});

WithValue.args = {
  valor: '00000000',
  valid: true,
}

export const Required = Template.bind({});

Required.args = {
  required: true,
}

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = {
  invalid: true,
  message: 'Invalid Input',
}

export const withInfo = Template.bind({});
withInfo.args = {
  info: true,
}


//veja: https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86
