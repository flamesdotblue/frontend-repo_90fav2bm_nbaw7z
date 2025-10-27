import React from 'react';
import { Code, Zap, Layers, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Engineering',
    desc: 'React/Next.js, TypeScript, Tailwind, performance and accessibility first. Lighthouse 90+ as a baseline.'
  },
  {
    icon: Layers,
    title: 'Full‑stack Delivery',
    desc: 'Node/Express, SQL & Mongo, Supabase/Firebase. API design, auth, and observability included.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Cross‑platform',
    desc: 'Expo/React Native with shared design systems. Ship iOS/Android quickly with web parity.'
  },
  {
    icon: Zap,
    title: 'Performance & DX',
    desc: 'Profiling, caching, CI/CD, Docker, Vercel. 30–90% performance uplifts and faster team throughput.'
  },
];

export default function Services() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services that turn ideas into traction</h2>
          <p className="mt-3 text-gray-600">Engagements optimized for ROI, clarity, and speed.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
