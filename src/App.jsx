import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-teal-700">MF</a>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm text-gray-700 hover:text-teal-700">Services</a>
            <a href="#projects" className="text-sm text-gray-700 hover:text-teal-700">Projects</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-teal-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md bg-teal-700 px-4 py-2 text-sm text-white shadow hover:bg-teal-800">Hire me</a>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <div id="services">
          <Services />
        </div>
        <Projects />
      </main>

      <footer id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-2xl bg-gradient-to-br from-teal-700 to-teal-600 p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold">Let’s build something useful</h3>
            <p className="mt-1 text-white/90">Remote-friendly, pragmatic, and collaborative. I focus on outcomes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@mf.dev"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow hover:bg-teal-50"
              >
                Email: hello@mf.dev
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Muhammad Fajri — Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
