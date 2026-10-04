import React from 'react';
import { ShieldCheck, Calendar, Cpu, Globe2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPoints = [
    {
      stat: 'Since 1997',
      label: 'Founded in Ahmedabad, Gujarat',
      description: 'Pioneering heavy road & bitumen machinery',
      icon: Calendar,
    },
    {
      stat: '28+ Years',
      label: 'Industry Experience',
      description: 'Continuous innovation & field expertise',
      icon: ShieldCheck,
    },
    {
      stat: 'Engineering',
      label: '& Precision Manufacturing',
      description: 'In-house Kathwada GIDC production facility',
      icon: Cpu,
    },
    {
      stat: 'India & Global',
      label: 'Infrastructure Markets',
      description: 'Powering national highways & export projects',
      icon: Globe2,
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`pt-4 sm:pt-0 ${
                  idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''
                } flex flex-col justify-between`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Atlas Benchmark
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  {item.stat}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                  {item.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
