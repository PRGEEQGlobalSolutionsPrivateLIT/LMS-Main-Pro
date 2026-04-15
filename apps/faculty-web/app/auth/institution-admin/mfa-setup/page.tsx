"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "../../../../components/auth/AuthShell";
import QrPlaceholder from "../../../../components/auth/QrPlaceholder";
import OtpInput from "../../../../components/auth/OtpInput";
import NeuButton from "../../../../components/auth/NeuButton";
import { authApi } from "../../../../lib/api";
import { ROLES } from "../../../../lib/constants";
import { validateMfaCode } from "../../../../lib/validators";
export default function MfaSetupPage() {
  const router = useRouter();

  const [secret, setSecret] = useState("MFA-SECRET-PLACEHOLDER");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initMfa() {
      try {
        const response = await authApi.setupMfa({
          role: ROLES.INSTITUTION_ADMIN,
        });

        setSecret(response.secret || "MFA-SECRET-PLACEHOLDER");
        setQrCodeUrl(response.qrCodeUrl || "");
      } catch {
        setSecret("MFA-SECRET-PLACEHOLDER");
      }
    }

    void initMfa();
  }, []);

  async function handleActivate() {
    const validationError = validateMfaCode(otp);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      await authApi.verifyMfa({
        role: ROLES.INSTITUTION_ADMIN,
        otp,
        setup: true,
      });

      router.push("/auth/institution-admin/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "MFA setup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="QR / MFA Setup"
      subtitle="Scan the QR code in your authenticator app and enter the verification code."
    >
      <div className="space-y-5">
        {qrCodeUrl ? (
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="mx-auto h-56 w-56 rounded-3xl sm:h-60 sm:w-60 md:h-64 md:w-64"
          />
        ) : (
          <QrPlaceholder />
        )}

        <div className="neu-inset p-4">
          <p className="text-sm font-semibold text-slate-800">Manual setup key</p>
          <p className="mt-2 break-all text-sm text-slate-600">{secret}</p>
        </div>

        <OtpInput value={otp} onChange={setOtp} />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <NeuButton className="w-full" onClick={handleActivate} disabled={loading}>
          {loading ? "Activating..." : "Activate MFA"}
        </NeuButton>
      </div>
    </AuthShell>
  );
}
