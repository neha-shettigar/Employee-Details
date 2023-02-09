import React from 'react';

interface ComponentInterface {
  value: string;
  placeholder: string;
  label: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// interface for employee detail input
const InputTextField = ({
  value,
  placeholder,
  label,
  onChangeValue,
}: ComponentInterface) => {
  return (
    <main className="container">
      <label className="container__label">{label}</label>
      <form className="container__form">
        {/* input field */}
        <input
          type="text"
          className="container__input"
          value={value}
          onChange={onChangeValue}
          placeholder={placeholder}
        />
      </form>
    </main>
  );
};

export default InputTextField;
