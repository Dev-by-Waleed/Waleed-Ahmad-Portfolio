import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { achievements } from "@/data/profile";
import {
  BookOpenIcon,
  CodeIcon,
  LayersIcon,
  SparklesIcon,
  TrophyIcon,
} from "@/components/icons";

const achievementIcons = {
  trophy: TrophyIcon,
  sparkles: SparklesIcon,
  code: CodeIcon,
  layers: LayersIcon,
  book: BookOpenIcon,
};

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Moments I'm proud of"
      description="Awards, recognition and milestones along the way."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievementIcons[achievement.icon] ?? TrophyIcon;
          return (
            <Reveal key={achievement.title} delay={(index % 3) * 100}>
              <article className="group h-full rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-4 flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-muted">{achievement.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-sm text-accent">{achievement.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {achievement.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
