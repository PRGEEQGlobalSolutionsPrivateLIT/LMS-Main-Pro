"use client";

import { FormEvent, useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBullseye,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import { NeumorphicInput, NeumorphicTextarea } from "./components/Input";
import "./page.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  consent: boolean;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  consent?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  consent: false,
};

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: ValidationErrors = {};

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
    } else if (!/^\d{10}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!form.interest.trim()) {
      nextErrors.interest = "Please describe your area of interest.";
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

      // Auto-close after showing success message
      setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
        onClose();
      }, 3000);
    }
  };

  const handleClose = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modalOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modalCard">
        {/* Gradient Header Bar */}
        <div className="gradientHeader" />

        {/* Close Button */}
        <button
          type="button"
          className="closeButton"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <FaTimes size={16} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="modalHeader">
              <h1 id="modal-title" className="modalTitle">
                Book a Demo
              </h1>
            </div>

            {/* Mandatory Message */}
            <div className="mandatoryMessage">
              <span className="messageIcon">ℹ️</span>
              Fields marked with an asterisk (*) are mandatory.
            </div>

            {/* Form */}
            <div className="formContainer">
              <form onSubmit={handleSubmit} noValidate>
                <NeumorphicInput
                  label="Full Name"
                  id="name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Enter your full name"
                  error={errors.name}
                  icon={<FaUser size={16} />}
                  required
                />

                <NeumorphicInput
                  label="Email ID"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  placeholder="Enter your email address"
                  error={errors.email}
                  icon={<FaEnvelope size={16} />}
                  required
                />

                <NeumorphicInput
                  label="Mobile Number"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  error={errors.phone}
                  icon={<FaPhoneAlt size={16} />}
                  required
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />

                <NeumorphicTextarea
                  label="Any Specific Area of Interest"
                  id="interest"
                  value={form.interest}
                  onChange={(event) =>
                    handleChange("interest", event.target.value)
                  }
                  placeholder="Describe what you'd like to see in the demo..."
                  error={errors.interest}
                  icon={<FaBullseye size={16} />}
                  required
                  rows={4}
                  maxLength={300}
                />

                <label className="checkboxField">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(event) =>
                      handleChange("consent", event.target.checked)
                    }
                  />
                  <span>
                    I agree to be contacted by PRGEEQ for a demo{" "}
                    <span className="requiredStar">*</span>
                  </span>
                </label>

                {errors.consent && (
                  <span className="fieldError">⚠️ {errors.consent}</span>
                )}

                <button type="submit" className="neumorphic-button">
                  Book My Demo
                </button>
              </form>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="successMessage">
            <div className="successIcon">
              <FaCheckCircle size={44} />
            </div>
            <h3>Demo Booked Successfully!</h3>
            <p>
              Thank you! Our team will contact you shortly to schedule your
              personalized demo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
