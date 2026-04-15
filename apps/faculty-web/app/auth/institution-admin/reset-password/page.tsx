"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import AuthShell from "@/components/auth/AuthShell";
import OtpInput from "@/components/auth/OtpInput";
import NeuInput from "@/components/auth/NeuInput";
import NeuButton from "@/components/auth/NeuButton";
import PasswordChecklist from "@/components/auth/PasswordChecklist";
import { authApi } from "@/lib/api";
import { ROLES } from "@/lib/constants";
import { validateResetPasswordForm } from "@/lib/validators";

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useSearchParams();
  const identifier = params.get("identifier") || "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validateResetPasswordForm(
      otp,
      newPassword,
      confirmPassword
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      await authApi.resetPassword({
        role: ROLES.INSTITUTION_ADMIN,
        identifier,
        otp,
        newPassword,
        confirmPassword,
      });

      router.push("/auth/institution-admin/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Password reset failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Reset Password"
      subtitle="Validate your OTP and set a new password."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <OtpInput value={otp} onChange={setOtp} />

        <NeuInput
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
        />

        <NeuInput
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
        />

        <PasswordChecklist password={newPassword} />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <NeuButton type="submit" className="w-full" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </NeuButton>
      </form>
    </AuthShell>
  );
}