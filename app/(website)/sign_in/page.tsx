"use client";

import { AuthController } from "@/api/authController";
import RegisterDialog from "@/components/website/RegisterDialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginFormState = {
  phone: string;
  password: string;
};

const initialState: LoginFormState = {
  phone: "",
  password: "",
};

export default function SignInPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<LoginFormState>(initialState);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;

    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);

      setFormData((previousState) => ({
        ...previousState,
        phone: onlyDigits,
      }));

      return;
    }

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (formData.phone.length !== 10) {
      setErrorMessage("Phone number must contain exactly 10 digits.");
      return;
    }

    if (!formData.password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      // Change this method name according to your AuthController.
      const response = await AuthController.login({
        phone: formData.phone,
        password: formData.password,
      });

      console.log("Login successful:", response);

      setSuccessMessage("Login successful.");

      // Change the route according to your application.
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(
        "Login failed. Please check your phone number and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 p-4 sm:p-6 md:grid-cols-[1fr_1fr]">
      <div className="flex items-center justify-center">
        <img
          src="/TeacherRegister.webp"
          alt="Sign in"
          className="h-auto w-full max-w-md object-contain"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-gray-300 p-6"
      >
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Sign In
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Sign in to access your account.
          </p>
        </div>

        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          placeholder="Enter your phone number"
          onChange={handleInputChange}
          maxLength={10}
          inputMode="numeric"
          pattern="[0-9]{10}"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleInputChange}
        />

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-background-secondary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {errorMessage && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="rounded-lg bg-green-50 p-3 text-sm text-green-600">
            {successMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-4xl border-2 border-background-secondary bg-background-secondary px-4 py-3 font-medium text-white transition hover:bg-white hover:text-background-secondary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-center text-sm text-gray-700">
          Don&apos;t have an account?{" "}
          <RegisterDialog>
          <Link
            href="#"
            className="text-background-secondary hover:underline"
          >
            Create an account
          </Link>
          </RegisterDialog>
        </p>
      </form>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
  maxLength,
  inputMode,
  pattern,
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        inputMode={inputMode}
        pattern={pattern}
        required
        className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}