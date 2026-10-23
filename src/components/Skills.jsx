import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/profile";
import { BookOpenIcon, CodeIcon, LayersIcon } from "@/components/icons";

const groupIcons = {
  code: CodeIcon,
  layers: LayersIcon,
  book: BookOpenIcon,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Technologies I use day to day, plus the fundamentals behind them."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.icon] ?? CodeIcon;
          return (
            <Reveal key={group.title} delay={index * 100}>
              <article className="group h-full rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted">{group.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                          style={{ "--level": `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
