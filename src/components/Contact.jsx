import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

const details = [
  { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPinIcon, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a role, an internship or a project in mind? Drop me a message and I'll reply within a day or two."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted">
              I&apos;m currently open to frontend internships for summer 2026, and
              always happy to talk about web development, open source or campus
              projects.
            </p>

            <ul className="space-y-3">
              {details.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">{detail.label}</span>
                      <span className="font-medium text-foreground">{detail.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={detail.label}>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
