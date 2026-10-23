import { profile, stats } from "@/data/profile";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative blueprint grid + glow, purely visual. */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="animate-fade-up">
          {/* <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-success" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {profile.availability}
          </p> */}

          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-mono text-base text-accent sm:text-lg">
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-accent/40"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPinIcon className="h-4 w-4 text-accent" />
            {profile.location}
          </p>
        </div>

        {/* Stat strip */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-surface px-6 py-6 transition-colors duration-300 hover:bg-surface-2"
            >
              <dd className="font-display text-3xl font-bold text-foreground">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </dd>
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
