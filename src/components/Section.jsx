import Reveal from "@/components/Reveal";

/**
 * Shared section shell: id for anchor nav, numbered eyebrow, title,
 * optional description, and a slot for content.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 flex items-center gap-3 font-mono text-sm text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
          ) : null}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
