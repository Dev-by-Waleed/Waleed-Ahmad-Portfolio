"use client";

import { useState } from "react";
import { SendIcon } from "@/components/icons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myklzezn";

const EMPTY_VALUES = { name: "", email: "", message: "" };

/** Validate a single field. Returns an error string, or "" when valid. */
function validateField(field, value) {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      return "";
    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(trimmed)) return "Please enter a valid email address.";
      return "";
    case "message":
      if (!trimmed) return "Please enter a message.";
      if (trimmed.length < 10) return "Message must be at least 10 characters.";
      return "";
    default:
      return "";
  }
}

function validateAll(values) {
  return {
    name: validateField("name", values.name),
    email: validateField("email", values.email),
    message: validateField("message", values.message),
  };
}

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "Jane Doe" },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "jane@example.com",
  },
];

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    // Keep errors live once a field has been touched.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAll(values);
    const nextTouched = { name: true, email: true, message: true };
    setErrors(nextErrors);
    setTouched(nextTouched);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      // Focus the first invalid field for keyboard users.
      const firstInvalid = FIELDS.find((field) => nextErrors[field.name]) ?? {
        name: "message",
      };
      document.getElementById(`contact-${firstInvalid.name}`)?.focus();
      return;
    }

    setStatus("sending");
    setSubmitError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.errors?.[0]?.message || "Something went wrong.");
      }

      setStatus("success");
      setValues(EMPTY_VALUES);
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error?.message && error.message !== "Something went wrong."
          ? error.message
          : "Your message couldn't be sent. Please try again, or email me directly."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setSubmitError("");
    setValues(EMPTY_VALUES);
    setTouched({});
    setErrors({});
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-xl border border-line bg-surface p-10 text-center"
      >
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-6 w-6">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">
          Message sent!
        </h3>
        <p className="mt-2 max-w-xs text-muted">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="space-y-5">
        {FIELDS.map((field) => {
          const error = touched[field.name] ? errors[field.name] : "";
          return (
            <div key={field.name}>
              <label
                htmlFor={`contact-${field.name}`}
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                {field.label}
              </label>
              <input
                id={`contact-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? `contact-${field.name}-error` : undefined}
                className={`w-full rounded-lg border bg-surface-2 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent ${
                  error ? "border-danger" : "border-line"
                }`}
              />
              {error ? (
                <p
                  id={`contact-${field.name}-error`}
                  className="mt-1.5 text-sm text-danger"
                >
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell me about your project, role or just say hello…"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={touched.message && errors.message ? "true" : undefined}
            aria-describedby={
              touched.message && errors.message ? "contact-message-error" : undefined
            }
            className={`w-full resize-y rounded-lg border bg-surface-2 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent ${
              touched.message && errors.message ? "border-danger" : "border-line"
            }`}
          />
          {touched.message && errors.message ? (
            <p id="contact-message-error" className="mt-1.5 text-sm text-danger">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {status === "error" && submitError ? (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-4 w-4 animate-spin"
            >
              <path
                d="M21 12a9 9 0 1 1-6.219-8.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
