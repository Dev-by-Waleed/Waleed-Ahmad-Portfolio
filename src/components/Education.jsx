import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { education } from "@/data/profile";
import { CheckIcon } from "@/components/icons";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I've studied"
      description="Formal education and the certifications alongside it."
    >
      <ol className="relative space-y-8 border-l border-line pl-8">
        {education.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              />
              <article className="rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="font-mono text-sm text-accent">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.org}</p>
                <p className="mt-3 leading-relaxed text-muted">{item.summary}</p>
                {item.highlights.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
