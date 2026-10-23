import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { about, profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "@/components/icons";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
};

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Curious mind, careful hands"
      description="A bit about who I am and how I work."
    >
      <div className="grid gap-12 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.icon] ?? GithubIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
              Quick facts
            </h3>
            <dl className="mt-4 divide-y divide-line">
              {about.facts.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <ul className="mt-12 flex flex-wrap gap-3">
          {about.softSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent/50 hover:text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
