"use client";

import type { FormEvent } from "react";

const supportEmail = "support@rjatechllc.com";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("First Name") ?? "").trim();
    const lastName = String(formData.get("Last Name") ?? "").trim();
    const email = String(formData.get("Email") ?? "").trim();
    const phone = String(formData.get("Phone Number") ?? "").trim();
    const message = String(formData.get("Message") ?? "").trim();

    const body = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Email: ${email}`,
      `Phone Number: ${phone || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", supportEmail);
    gmailUrl.searchParams.set("su", "App Project Inquiry");
    gmailUrl.searchParams.set("body", body);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
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
        className="h-12 rounded-full bg-[#2f5f5a] px-6 text-sm font-semibold text-white transition hover:bg-[#244b47] sm:col-span-2 sm:w-fit"
        type="submit"
      >
        Send message
      </button>
    </form>
  );
}
