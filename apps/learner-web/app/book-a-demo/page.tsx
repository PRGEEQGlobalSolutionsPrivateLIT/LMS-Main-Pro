"use client";

import { FormEvent, useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiX,
  FiInfo,
} from "react-icons/fi";
import "./page.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  consent: false,
};

const NeumorphicInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
  ...rest
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="fieldLabel" htmlFor={id}>
    <span className="fieldTitle">{label}</span>
    <div className="inputWrapper">
      {IconComponent && <div className="fieldIcon">{IconComponent}</div>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="neumorphic-input"
        {...rest}
      />
    </div>
    {error && <span className="fieldError">{error}</span>}
  </label>
);

const NeumorphicTextarea = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
}) => (
  <label className="fieldLabel" htmlFor={id}>
    <span className="fieldTitle">{label}</span>
    <div className="inputWrapper">
      {IconComponent && <div className="fieldIcon">{IconComponent}</div>}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="neumorphic-textarea"
        rows={5}
        maxLength={250}
      />
    </div>
    {error && <span className="fieldError">{error}</span>}
  </label>
);

export default function TalkToOurExpertPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Mobile number is required.";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid mobile number.";
    }

    if (!form.interest.trim()) {
      nextErrors.interest = "Please tell us your area of interest.";
    }

    if (!form.consent) {
      nextErrors.consent = "Consent is required to proceed.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
      setForm(initialForm);
    }
  };

  return (
    <main className="pageWrapper">
      <section className="pageContent">
        <div className="pageHeader">
          <p className="eyebrow">Book a Demo</p>
          <h1>Schedule your personalized demo today.</h1>
          <p className="subtitle">
            Fill in your details and one of our experts will reach out to you.
          </p>
        </div>

        <div className="panelGrid">
          <div className="formCard">
            <button type="button" className="closeButton" aria-label="Close form">
              <FiX size={20} />
            </button>

            <div className="formHeading">
              <h2>Submit Your Query</h2>
            </div>

            <div className="mandatoryMessage">
              <FiInfo size={18} className="messageIcon" />
              Fields marked with an asterisk (*) are mandatory.
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="formRowTwo">
                <div style={{ "--index": 0 } as React.CSSProperties}>
                  <NeumorphicInput
                    label="Full Name *"
                    id="name"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder="Enter your full name"
                    error={errors.name}
                    icon={<FiUser size={18} />}
                    required
                  />
                </div>

                <div style={{ "--index": 1 } as React.CSSProperties}>
                  <NeumorphicInput
                    label="Email ID *"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder="Enter your email ID"
                    error={errors.email}
                    icon={<FiMail size={18} />}
                    required
                  />
                </div>
              </div>

              <div style={{ "--index": 2 } as React.CSSProperties}>
                <NeumorphicInput
                  label="Mobile Number *"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  placeholder="Enter your mobile number"
                  error={errors.phone}
                  icon={<FiPhone size={18} />}
                  required
                />
              </div>

              <div style={{ "--index": 3 } as React.CSSProperties}>
                <NeumorphicTextarea
                  label="Any Specific Area of Interest *"
                  id="interest"
                  value={form.interest}
                  onChange={(event) => handleChange("interest", event.target.value)}
                  placeholder="Write your interest here."
                  error={errors.interest}
                  icon={<FiMessageSquare size={18} />}
                />
              </div>

              <label className="checkboxField">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) =>
                    handleChange("consent", event.target.checked)
                  }
                />
                <span>
                  I express my consent for PRGEEQ expert to reach me{" "}
                  <span className="requiredStar">*</span>
                </span>
              </label>

              {errors.consent && (
                <span className="fieldError">{errors.consent}</span>
              )}

              <button type="submit" className="neumorphic-button">
                {submitted ? "Request Submitted" : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}