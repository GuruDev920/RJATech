"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAgOz0-tPY7Y2q-HB8uMFDxsK6sY7nyAsg",
  projectId: "smart-tech-llc-44679",
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("First Name") ?? "").trim();
    const lastName = String(formData.get("Last Name") ?? "").trim();
    const email = String(formData.get("Email") ?? "").trim();
    const phone = String(formData.get("Phone Number") ?? "").trim();
    const message = String(formData.get("Message") ?? "").trim();

    setStatus("sending");

    try {
      const firestoreUrl = new URL(
        `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/contact_messages`,
      );
      firestoreUrl.searchParams.set("key", firebaseConfig.apiKey);

      const response = await fetch(firestoreUrl.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            first_name: { stringValue: firstName },
            last_name: { stringValue: lastName },
            email: { stringValue: email },
            phone_number: { stringValue: phone },
            message: { stringValue: message },
            created_at: { timestampValue: new Date().toISOString() },
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Firestore save failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-white/12 bg-white p-5 text-[#151515] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:grid-cols-2 sm:p-6"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2 text-sm font-semibold" htmlFor="first-name">
        First Name
        <input
          className="h-12 rounded-lg border border-[#d9d4c7] bg-[#fbfaf6] px-4 text-base font-medium outline-none transition focus:border-[#2f5f5a] focus:bg-white"
          id="first-name"
          name="First Name"
          required
          type="text"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="last-name">
        Last Name
        <input
          className="h-12 rounded-lg border border-[#d9d4c7] bg-[#fbfaf6] px-4 text-base font-medium outline-none transition focus:border-[#2f5f5a] focus:bg-white"
          id="last-name"
          name="Last Name"
          required
          type="text"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="email">
        Email
        <input
          className="h-12 rounded-lg border border-[#d9d4c7] bg-[#fbfaf6] px-4 text-base font-medium outline-none transition focus:border-[#2f5f5a] focus:bg-white"
          id="email"
          name="Email"
          required
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="phone">
        Phone Number
        <input
          className="h-12 rounded-lg border border-[#d9d4c7] bg-[#fbfaf6] px-4 text-base font-medium outline-none transition focus:border-[#2f5f5a] focus:bg-white"
          id="phone"
          name="Phone Number"
          type="tel"
        />
      </label>
      <label
        className="grid gap-2 text-sm font-semibold sm:col-span-2"
        htmlFor="message"
      >
        Message
        <textarea
          className="min-h-36 resize-y rounded-lg border border-[#d9d4c7] bg-[#fbfaf6] px-4 py-3 text-base font-medium outline-none transition focus:border-[#2f5f5a] focus:bg-white"
          id="message"
          name="Message"
          required
        />
      </label>
      <button
        className="h-12 rounded-full bg-[#2f5f5a] px-6 text-sm font-semibold text-white transition hover:bg-[#244b47] disabled:cursor-not-allowed disabled:bg-[#8aa5a1] sm:col-span-2 sm:w-fit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "success" ? (
        <p className="text-sm font-semibold text-[#2f5f5a] sm:col-span-2">
          Message saved. We will get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-semibold text-[#d5674b] sm:col-span-2">
          Message could not be saved. Please try again.
        </p>
      ) : null}
    </form>
  );
}
