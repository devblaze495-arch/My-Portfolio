import React from 'react';
import styled from 'styled-components';

interface InputProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  className?: string;
}

const AnimatedInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  required,
  placeholder,
  multiline = false,
  rows = 4,
  className
}: InputProps) => {
  return (
    <StyledWrapper className={className}>
      <div className="container">
        {multiline ? (
          <textarea
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            className="input"
            rows={rows}
            placeholder={placeholder || ' '}
          />
        ) : (
          <input
            required={required}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="input"
            placeholder={placeholder || ' '}
          />
        )}
        <label className="label">{label}</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
    width: 100%;
  }
  .container .label {
    font-size: 13px;
    padding-left: 10px;
    position: absolute;
    top: 14px;
    left: 0;
    transition: 0.3s;
    pointer-events: none;
    color: rgba(255, 255, 255, 0.5);
  }
  .input {
    width: 100%;
    min-height: 45px;
    border: none;
    outline: none;
    padding: 12px 10px;
    border-radius: 6px;
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    box-shadow: 3px 3px 10px rgba(0,0,0,1),
      -1px -1px 6px rgba(255, 255, 255, 0.4);
    resize: vertical;
    font-family: inherit;
    box-sizing: border-box;
  }
  .input::placeholder {
    color: transparent;
  }
  .input:focus {
    border: 2px solid rgba(255,255,255,0.2);
    color: #fff;
    box-shadow: 3px 3px 10px rgba(0,0,0,1),
      -1px -1px 6px rgba(255, 255, 255, 0.4),
      inset 3px 3px 10px rgba(0,0,0,1),
      inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }
  .container .input:not(:placeholder-shown) ~ .label,
  .container .input:focus ~ .label {
    transition: 0.3s;
    padding-left: 2px;
    top: -20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  textarea.input {
    min-height: 120px;
    padding-top: 14px;
  }
`;

export default AnimatedInput;
