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

export const WithMessageInvalid = Template.bind({});
WithMessageInvalid.args = {
  status: 'invalid',
  message: 'Message',
}

export const WithMessageValid = Template.bind({});
WithMessageValid.args = {
  status: 'valid',
  message: 'Message',
}

export const WithMessageWarning = Template.bind({});
WithMessageWarning.args = {
  status: 'warning',
  message: 'Message',
}

export const WithInfo = Template.bind({});
WithInfo.args = {
  info: true,
}


//veja: https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86
