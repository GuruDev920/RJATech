const services = [
  {
    title: "Mobile apps",
    body: "Android and Apple app experiences built for smooth onboarding, account access, navigation, and day-to-day user engagement.",
  },
  {
    title: "Smart TV apps",
    body: "Lean-back TV apps for Samsung, LG, Roku, and connected screens where remote-first navigation needs to feel effortless.",
  },
  {
    title: "Custom app interfaces",
    body: "Polished user interfaces shaped around your product, brand, workflows, and the platform rules each device expects.",
  },
  {
    title: "Cross-platform delivery",
    body: "Coordinated app releases across phones, tablets, Smart TVs, Roku devices, and Windows environments.",
  },
];

const stats = [
  { value: "6+", label: "platform families" },
  { value: "TV", label: "remote-first UX" },
  { value: "App", label: "store-ready builds" },
];

const steps = [
  {
    title: "Plan the product",
    body: "We map the user journey, platform requirements, content flows, and release priorities before development begins.",
  },
  {
    title: "Build for each screen",
    body: "Interfaces are designed for touch, remote controls, large screens, and device-specific expectations across every platform.",
  },
  {
    title: "Launch and improve",
    body: "We support submission, rollout, fixes, and product improvements so your apps keep working for real users.",
  },
];

const platforms = ["Android", "Apple", "Samsung", "LG", "Roku", "Windows"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#151515]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          className="inline-flex items-center gap-3"
          href="#"
          aria-label="RJA Tech LLC home"
        >
          <img
            alt=""
            className="h-14 w-auto sm:h-16"
            src="/images/rja-tech-logo.svg"
          />
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#55534d] sm:flex">
          <a className="transition hover:text-[#151515]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#151515]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[#151515]" href="#contact">
            Contact
          </a>
        </div>
        <a
          className="inline-flex h-10 items-center justify-center rounded-full bg-[#151515] px-4 text-sm font-medium text-white transition hover:bg-[#2f5f5a]"
          href="#contact"
        >
          Get in touch
        </a>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:pb-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-[#d9d4c7] bg-white/70 px-4 py-2 text-sm font-medium text-[#2f5f5a]">
            Mobile and Smart TV app development
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Apps for the screens your users already watch.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#55534d]">
            RJA Tech LLC provides mobile and Smart TV app development for
            Android, Apple, Samsung, LG, Roku, and Windows users.
          </p>
          <div className="mt-6 flex max-w-xl flex-wrap gap-2">
            {platforms.map((platform) => (
              <span
                className="rounded-full border border-[#d9d4c7] bg-white/75 px-3 py-1.5 text-sm font-semibold text-[#2f5f5a]"
                key={platform}
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f5f5a] px-6 text-sm font-semibold text-white transition hover:bg-[#244b47]"
              href="#contact"
            >
              Discuss your app
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#cfc8b8] px-6 text-sm font-semibold text-[#151515] transition hover:border-[#151515]"
              href="#services"
            >
              View services
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            alt="Mobile and Smart TV app interface preview across multiple devices"
            className="aspect-[16/10] w-full rounded-[1.75rem] object-cover shadow-[0_30px_80px_rgba(38,47,43,0.20)]"
            src="/images/app-platforms-hero.svg"
          />
          <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded-2xl border border-white/45 bg-white/82 p-4 shadow-2xl backdrop-blur md:left-6 md:right-6 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-[#2f5f5a]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#55534d]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#e2ddcf] bg-white px-5 py-16 sm:px-8"
        id="services"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#d5674b]">
              What we build
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Apps made for mobile users, living rooms, and connected devices.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="rounded-lg border border-[#e2ddcf] bg-[#fbfaf6] p-5"
                key={service.title}
              >
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#55534d]">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8" id="process">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#d5674b]">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            From first idea to app store release and ongoing support.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              className="rounded-lg border border-[#e2ddcf] bg-white p-6"
              key={step.title}
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#55534d]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#151515] px-5 py-16 text-white sm:px-8" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f0a08c]">
              Contact RJA Tech LLC
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Tell us which platforms you want to launch on.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              Share a few details about your app project and we will get back to
              you with the next steps.
            </p>
            <a
              className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f0a08c]"
              href="mailto:support@rjatechllc.com?subject=App%20Project%20Inquiry"
            >
              support@rjatechllc.com
            </a>
          </div>
          <form
            action="mailto:support@rjatechllc.com?subject=App%20Project%20Inquiry"
            className="grid gap-4 rounded-lg border border-white/12 bg-white p-5 text-[#151515] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:grid-cols-2 sm:p-6"
            encType="text/plain"
            method="post"
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
        </div>
      </section>
    </main>
  );
}
