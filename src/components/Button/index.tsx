import React from 'react';

// interface for RemoveEmplopyee
interface EmployeeInterface {
  label: string;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// takes only id
const Button = ({ label, onClickButton }: EmployeeInterface) => {
  return (
    <main className="container">
      {/* for submitting the inputs */}
      <button
        className="container__button"
        type="submit"
        onClick={onClickButton}
      >
        {label}
      </button>
    </main>
  );
};

export default Button;
