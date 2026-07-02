const services = [
  "Technology support",
  "Digital solutions",
  "Business systems",
  "Reliable communication",
];

const stats = [
  { value: "01", label: "focused page" },
  { value: "24h", label: "easy content swap" },
  { value: "100%", label: "responsive design" },
];

const steps = [
  {
    title: "Tell the story",
    body: "A strong opening section explains who you are, what you offer, and why visitors should care.",
  },
  {
    title: "Build trust",
    body: "Proof points, service highlights, and a polished visual system make the page feel credible fast.",
  },
  {
    title: "Convert visitors",
    body: "Clear calls to action guide people toward booking, calling, buying, or sending a message.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#151515]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-base font-semibold tracking-wide" href="#">
          RJA Tech LLC
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
          href="mailto:support@rjatechllc.com"
        >
          Get in touch
        </a>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:pb-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-[#d9d4c7] bg-white/70 px-4 py-2 text-sm font-medium text-[#2f5f5a]">
            Technology services for modern businesses
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Practical technology support from RJA Tech LLC.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#55534d]">
            We help businesses move with confidence through dependable digital
            support, clear communication, and solutions shaped around the work
            that matters most.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f5f5a] px-6 text-sm font-semibold text-white transition hover:bg-[#244b47]"
              href="#contact"
            >
              Start a conversation
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
            alt="Modern workspace with a laptop and refined desk objects"
            className="aspect-[16/10] w-full rounded-[1.75rem] object-cover shadow-[0_30px_80px_rgba(38,47,43,0.20)]"
            src="/images/hero-workspace.png"
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
              What we support
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Focused help for the systems and details that keep work moving.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="rounded-lg border border-[#e2ddcf] bg-[#fbfaf6] p-5"
                key={service}
              >
                <p className="text-lg font-semibold">{service}</p>
                <p className="mt-3 text-sm leading-6 text-[#55534d]">
                  Reach out with your needs and we will help identify the
                  right next step.
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
            Clear, steady support from first message to finished result.
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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f0a08c]">
              Contact RJA Tech LLC
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Tell us what you need help with and we will get back to you.
            </h2>
          </div>
          <a
            className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#151515] transition hover:bg-[#f0a08c]"
            href="mailto:support@rjatechllc.com"
          >
            support@rjatechllc.com
          </a>
        </div>
      </section>
    </main>
  );
}
