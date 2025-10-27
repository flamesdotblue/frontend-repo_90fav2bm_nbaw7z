import React from 'react';
import { ArrowRight, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AssetMantle (Web3)',
    impact: 'Scale to 1M+ users, 30% developer time reduction',
    tags: ['Next.js', 'TypeScript', 'Redux', 'Web3'],
  },
  {
    title: 'AlphaProMed (Healthcare)',
    impact: '18% performance increase, improved conversion',
    tags: ['React', 'Tailwind', 'Node'],
  },
  {
    title: 'Woman Opportunities (Civic)',
    impact: '80% traffic growth, better content discovery',
    tags: ['Next.js', 'SEO', 'Analytics'],
  },
  {
    title: 'Shuvro Jaya (Retail)',
    impact: '90% sales uplift via DX + UX improvements',
    tags: ['Next.js', 'E‑commerce', 'Redux'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured work</h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Selected projects and partnerships focused on measurable outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-teal-700 px-4 py-2 text-sm text-white shadow hover:bg-teal-800"
          >
            Let’s collaborate <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl bg-[#F9FAFB] p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.impact}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-2.5 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:underline">
                  <Globe size={16} /> Live
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:underline">
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
