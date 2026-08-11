"use client";

import { AuthController } from "@/api/authController";
import Link from "next/link";
import { useState } from "react";

type TeacherFormState = {
  name: string;
  email: string;
  city: string;
  pincode: string;
  qualification: string;
  phone: string;
  password: string;
  confirmPassword: string;
  photo: File | null;
  aadharFront: File | null;
  aadharBack: File | null;
};

const initialState: TeacherFormState = {
  name: "",
  email: "",
  city: "",
  pincode: "",
  qualification: "",
  phone: "",
  password: "",
  confirmPassword: "",
  photo: null,
  aadharFront: null,
  aadharBack: null,
};

const cityOptions = [
  "Varanasi",
  "Lucknow",
  "Prayagraaj",
  "Gorakhpur",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Bangalore",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Patna",
];

export default function TeacherSignUp() {
  const [formData, setFormData] =
    useState<TeacherFormState>(initialState);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;

    if (name === "pincode") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 6);

      setFormData((previousState) => ({
        ...previousState,
        pincode: onlyDigits,
      }));

      return;
    }

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, files } = e.currentTarget;

    setFormData((previousState) => ({
      ...previousState,
      [name]: files?.[0] ?? null,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (formData.pincode.length !== 6) {
      setErrorMessage("Pincode must contain exactly 6 digits.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("city", formData.city);
      payload.append("pincode", formData.pincode);
      payload.append("qualification", formData.qualification);
      payload.append("phone", formData.phone);
      payload.append("password", formData.password);
      payload.append("confirmPassword", formData.confirmPassword);

      if (formData.photo) {
        payload.append("photo", formData.photo);
      }

      if (formData.aadharFront) {
        payload.append("aadharFront", formData.aadharFront);
      }

      if (formData.aadharBack) {
        payload.append("aadharBack", formData.aadharBack);
      }

      await AuthController.registerTeacher(payload);

      setSuccessMessage("Teacher registered successfully.");
      setFormData(initialState);
    } catch (error) {
      console.error("Teacher registration failed:", error);
      setErrorMessage(
        "Registration failed. Please check your details and try again."
      );
    } finally {
        setFormData({
  name: "",
  email: "",
  city: "",
  pincode: "",
  qualification: "",
  phone: "",
  password: "",
  confirmPassword: "",
  photo: null,
  aadharFront: null,
  aadharBack: null,
});
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 p-4 sm:p-6 md:grid-cols-[1fr_2fr]">
      <div className="flex items-center justify-center">
        <img
          src="/TeacherRegister.webp"
          alt="Teacher Registration"
          className="h-auto w-full object-contain"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 border border-gray-300 p-6 md:grid-cols-2"
      >
        <Input
          label="Name"
          name="name"
          value={formData.name}
          placeholder="Enter Your Name"
          onChange={handleInputChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Enter Mobile Number"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <Select
          label="City"
          name="city"
          value={formData.city}
          options={cityOptions}
          onChange={handleSelectChange}
        />

        <Input
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          placeholder="Enter Pincode"
          onChange={handleInputChange}
          maxLength={6}
          inputMode="numeric"
          pattern="[0-9]{6}"
        />

        <Input
          label="Qualification"
          name="qualification"
          placeholder="Enter Your Qualification"
          value={formData.qualification}
          onChange={handleInputChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Enter Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <FileInput
          label="Upload Photo"
          name="photo"
          onChange={handleFileChange}
        />

        <FileInput
          label="Upload Aadhaar Front Side"
          name="aadharFront"
          onChange={handleFileChange}
        />

        <FileInput
          label="Upload Aadhaar Back Side"
          name="aadharBack"
          onChange={handleFileChange}
        />

        <div className="md:col-span-2">
          {errorMessage && (
            <p className="my-2 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="my-2 rounded-lg bg-green-50 p-3 text-sm text-green-600">
              {successMessage}
            </p>
          )}

          <h5 className="my-2 text-sm text-gray-700">
            Note: After signup, please update your remaining details to
            get verified.
          </h5>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-4xl border-2 border-background-secondary bg-background-secondary px-4 py-3 font-medium text-white transition hover:bg-white hover:text-background-secondary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Signup"}
          </button>

          <p className="my-2 text-center text-sm text-gray-700">
            By signing up, you agree to our{" "}
            <Link
              href="/term_and_condition"
              className="text-background-secondary"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy_policy"
              className="text-background-secondary"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <p className="my-2 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              href="/sign_in"
              className="text-background-secondary"
            >
              Sign In
            </Link>
          </p>
        </div>
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
  placeholder:string;
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

function Select({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FileInput({
  label,
  name,
  onChange,
}: {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        type="file"
        accept="image/*"
        onChange={onChange}
        required
        className="rounded-xl border border-gray-300 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-green-50 file:px-4 file:py-2 file:text-green-700 hover:file:bg-green-100"
      />
    </div>
  );
}