import React, { useState, useEffect } from 'react';
import { Employee } from './state/actions';
import { addEmployee, getEmployees } from './state/database';
import AddEmployee from './components/AddEmployee';
import Button from './components/Button';

const App = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({});
  const [addEmpFlag, setAddEmpFlag] = useState(false);

  useEffect(() => {
    void getEmployees().then((employee) => {
      setEmployees(employees);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void addEmployee(newEmployee as any).then(() => {
      setNewEmployee({});
      void getEmployees().then((employee) => {
        setEmployees(employees);
      });
    });
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewEmployee({ ...newEmployee, id: e.target.value });
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewEmployee({ ...newEmployee, name: e.target.value });
  const onChangeRole = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewEmployee({ ...newEmployee, role: e.target.value });
  const onChangeSalary = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewEmployee({ ...newEmployee, salary: e.target.value });
  const onClickAddButton = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAddEmpFlag(true);
  return (
    <div className="App">
      <Button onClickButton={onClickAddButton} label="ADD" />
      {addEmpFlag ? (
        <section>
          <AddEmployee
            id={newEmployee.id ?? ''}
            name={newEmployee.name ?? ''}
            role={newEmployee.role ?? ''}
            salary={newEmployee.salary ?? ''}
            onChangeId={onChangeId}
            onChangeName={onChangeName}
            onChangeRole={onChangeRole}
            onChangeSalary={onChangeSalary}
          />
          <button type="submit" onSubmit={handleSubmit}>
            Add Employee
          </button>
          <p>{newEmployee.id}</p>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
