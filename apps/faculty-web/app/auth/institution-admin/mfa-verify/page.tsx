"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "../../../../components/auth/AuthShell";
import OtpInput from "../../../../components/auth/OtpInput";
import NeuButton from "../../../../components/auth/NeuButton";
import { authApi } from "../../../../lib/api";
import { ROLES } from "../../../../lib/constants";
import { validateMfaCode } from "../../../../lib/validators";

export default function MfaVerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mfaPayloadKey =
    process.env.NEXT_PUBLIC_MFA_PAYLOAD_KEY ||
    (process.env.NODE_ENV === "production" ? "code" : "otp");

  function buildVerifyPayload(value: string) {
    if (mfaPayloadKey === "otp") {
      return {
        role: ROLES.INSTITUTION_ADMIN,
        otp: value,
      };
    }

    return {
      role: ROLES.INSTITUTION_ADMIN,
      code: value,
    };
  }

  function getErrorMessage(err: unknown) {
    if (err instanceof Error && err.message) {
      return err.message;
    }

    return "MFA verification failed.";
  }

  async function handleVerify(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const normalizedOtp = otp.replace(/\s+/g, "").trim();
    const validationError = validateMfaCode(normalizedOtp);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = buildVerifyPayload(normalizedOtp);
      await authApi.verifyMfa(payload as any);

      router.push("/institution-admin/dashboard");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Verify MFA"
      subtitle="Enter the code from your authenticator application."
    >
      <form onSubmit={handleVerify} className="space-y-4">
        <OtpInput
          value={otp}
          onChange={(value) => {
            setOtp(value);
            if (error) setError("");
          }}
        />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <NeuButton type="submit" className="w-full" disabled={loading}>
          {loading ? "Verifying..." : "Verify and Continue"}
        </NeuButton>
      </form>
    </AuthShell>
  );
}
