import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEmployee from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/AddEmployee',
  component: AddEmployee,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //   },
} as ComponentMeta<typeof AddEmployee>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddEmployee> = (args) => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [salary, setSalary] = React.useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeRole = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRole(e.target.value);
  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSalary(e.target.value);

  return (
    <AddEmployee
      {...args}
      id={id}
      name={name}
      role={role}
      salary={salary}
      onChangeId={onChangeId}
      onChangeName={onChangeName}
      onChangeRole={onChangeRole}
      onChangeSalary={onChangeSalary}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
