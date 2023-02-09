import React from 'react';
import InputTextField from '../InputTextField';

interface EmployeeInterface {
  id: string;
  name: string;
  role: string;
  salary: string;
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddEmployee = ({
  id,
  name,
  role,
  salary,
  onChangeId,
  onChangeName,
  onChangeRole,
  onChangeSalary,
}: EmployeeInterface) => {
  return (
    <main>
      <InputTextField
        value={id}
        placeholder="ID"
        label="Add Employee ID"
        onChangeValue={onChangeId}
      />
      <InputTextField
        value={name}
        placeholder="Name"
        label="Add Employee Name"
        onChangeValue={onChangeName}
      />
      <InputTextField
        value={role}
        placeholder="Role"
        label="Add Employee Role"
        onChangeValue={onChangeRole}
      />
      <InputTextField
        value={salary}
        placeholder="Salary"
        label="Add Employee Salary"
        onChangeValue={onChangeSalary}
      />
    </main>
  );
};
export default AddEmployee;
