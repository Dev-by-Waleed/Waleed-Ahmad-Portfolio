"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/profile";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 flex items-center gap-3 font-mono text-sm text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Projects
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A selection of coursework, hackathon and open-source projects.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${isActive
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-surface text-muted hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              {/* Gradient cover — replace with an <Image> for real screenshots. */}
              <div
                aria-hidden="true"
                className={`relative h-32 bg-gradient-to-br ${project.gradient}`}
              >
                <span className="absolute bottom-3 left-4 font-display text-2xl font-bold text-white/90">
                  {project.title}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                    {project.category}
                  </span>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Live demo
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source
                  </a>
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Backend
                    </a>
                  )}

                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-xl border border-line bg-surface p-8 text-center text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </section>
  );
}
