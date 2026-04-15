"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "../../../../components/auth/AuthShell";
import NeuInput from "../../../../components/auth/NeuInput";
import NeuButton from "../../../../components/auth/NeuButton";
import { authApi } from "../../../../lib/api";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!identifier.trim()) {
      setError("Enter your official email or phone number.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await authApi.forgotPassword({
        identifier: identifier.trim(),
      });

      router.push(
        `/auth/institution-admin/reset-password?identifier=${encodeURIComponent(
          identifier.trim()
        )}`
      );
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to initiate password reset."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Forgot Password"
      subtitle="Recover using official email or phone number."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <NeuInput
          label="Official Email or Phone Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Enter official email or phone number"
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <NeuButton type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending OTP..." : "Send Recovery OTP"}
        </NeuButton>
      </form>
    </AuthShell>
  );
}