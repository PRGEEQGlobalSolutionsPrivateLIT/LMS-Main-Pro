const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

type JsonBody =
  | Record<string, unknown>
  | unknown[]
  | string
  | number
  | boolean
  | null;

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: JsonBody;
};

async function request<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { body, headers, ...rest } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data: unknown = null;
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = text ? { message: text } : null;
  }

  if (!response.ok) {
    const errorMessage =
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof (data as { message?: unknown }).message === "string"
        ? (data as { message: string }).message
        : "Request failed";

    throw new Error(errorMessage);
  }

  return data as T;
}

export const authApi = {
  signup: (payload: JsonBody) =>
    request("/auth/signup", {
      method: "POST",
      body: payload,
    }),

  login: (payload: JsonBody) =>
    request<{ requiresMfa?: boolean }>("/auth/login", {
      method: "POST",
      body: payload,
    }),

  sendOtp: (payload: JsonBody) =>
    request("/auth/send-otp", {
      method: "POST",
      body: payload,
    }),

  resendOtp: (payload: JsonBody) =>
    request("/auth/resend-otp", {
      method: "POST",
      body: payload,
    }),

  verifyOtp: (payload: JsonBody) =>
    request("/auth/verify-otp", {
      method: "POST",
      body: payload,
    }),

  forgotPassword: (payload: JsonBody) =>
    request("/auth/forgot-password", {
      method: "POST",
      body: payload,
    }),

  resetPassword: (payload: JsonBody) =>
    request("/auth/reset-password", {
      method: "POST",
      body: payload,
    }),

  setupMfa: (payload: JsonBody) =>
    request<{ secret?: string; qrCodeUrl?: string }>("/auth/mfa/setup", {
      method: "POST",
      body: payload,
    }),

  verifyMfa: (payload: JsonBody) =>
    request("/auth/mfa/verify", {
      method: "POST",
      body: payload,
    }),
};