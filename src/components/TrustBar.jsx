import React from 'react';

const logos = [
  { name: 'AssetMantle', className: 'text-gray-800' },
  { name: 'AlphaProMed', className: 'text-gray-800' },
  { name: 'Woman Opportunities', className: 'text-gray-800' },
  { name: 'Shuvro Jaya', className: 'text-gray-800' },
  { name: 'Aamartaka', className: 'text-gray-800' },
  { name: 'Parthib', className: 'text-gray-800' },
];

export default function TrustBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
          Trusted by product teams and founders
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 items-center justify-center rounded-lg bg-gray-50 px-4 text-center shadow-sm ring-1 ring-gray-200"
            >
              <span className={`text-sm font-semibold ${logo.className}`}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
