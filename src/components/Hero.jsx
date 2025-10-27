import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Shield, Zap } from 'lucide-react';

const metrics = [
  { label: 'Users served', value: '1M+' },
  { label: 'Performance gains', value: '30–90%' },
  { label: 'Industries', value: 'Crypto, ERP, E‑com' },
  { label: 'Years of experience', value: '5+' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[60rem] rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-teal-700 shadow-sm ring-1 ring-teal-600/10">
              <Shield size={16} />
              <span>Frontend‑focused Full‑stack Developer</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Muhammad Fajri — building fast, reliable products that move metrics
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              React/Next.js specialist shipping measurable outcomes: 1M+ users served, 30–90% performance gains,
              and production impact across crypto, ERP, e‑commerce, mobile, and civic tech.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-5 py-3 text-white shadow transition hover:bg-teal-800"
              >
                <Rocket size={18} /> Start a project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-teal-700 ring-1 ring-teal-700/20 transition hover:ring-teal-700/40"
              >
                See case studies <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-gray-200">
                  <div className="text-2xl font-bold text-gray-900">{m.value}</div>
                  <div className="text-xs text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <Zap size={16} className="text-amber-500" />
              <span>Available for remote roles and partnerships (Singapore/USA time zones)</span>
            </div>
          </div>

          <div className="h-[420px] w-full lg:col-span-6 lg:h-[520px]">
            <div className="relative h-full w-full rounded-2xl bg-white/60 shadow-lg ring-1 ring-gray-200">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 via-transparent to-white/10" />
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">
              Fintech‑ready UI perspective — glassmorphic 3D credit card scene
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
