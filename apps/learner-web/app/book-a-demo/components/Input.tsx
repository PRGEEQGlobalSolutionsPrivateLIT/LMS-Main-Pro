"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
  required?: boolean;
}

export const NeumorphicInput: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
  required = false,
  ...rest
}) => {
  return (
    <label className="fieldLabel" htmlFor={id}>
      <span className="fieldTitle">
        {label}
        {required && <span className="requiredStar">*</span>}
      </span>
      <div className="inputWrapper">
        {IconComponent && (
          <div className="fieldIcon">{IconComponent}</div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="neumorphic-input"
          required={required}
          {...rest}
        />
      </div>
      {error && <span className="fieldError">⚠️ {error}</span>}
    </label>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

export const NeumorphicTextarea: React.FC<TextareaProps> = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
  required = false,
  rows = 5,
  maxLength,
  ...rest
}) => {
  return (
    <label className="fieldLabel" htmlFor={id}>
      <span className="fieldTitle">
        {label}
        {required && <span className="requiredStar">*</span>}
      </span>
      <div className="inputWrapper">
        {IconComponent && (
          <div className="fieldIcon">{IconComponent}</div>
        )}
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="neumorphic-textarea"
          rows={rows}
          maxLength={maxLength}
          required={required}
          {...rest}
        />
      </div>
      {error && <span className="fieldError">⚠️ {error}</span>}
    </label>
  );
};
