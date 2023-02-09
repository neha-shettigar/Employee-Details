import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputTextField from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/InputTextField',
  component: InputTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //   },
} as ComponentMeta<typeof InputTextField>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextField> = (args) => {
  const [value, setValue] = React.useState('');

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <InputTextField {...args} value={value} onChangeValue={onChangeValue} />
  );
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const ID = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ID.args = {
  placeholder: 'ID',
  label: 'Employee ID',
};

export const Name = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Name.args = {
  placeholder: 'Name',
  label: 'Employee Name',
};

export const Role = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Role.args = {
  placeholder: 'Role',
  label: 'Employee Role',
};

export const Salary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Salary.args = {
  placeholder: 'Salary',
  label: 'Employee Salary',
};
