import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Trusted by infrastructure contractors, highway developers, and bitumen processors across India.
            </p>
          </div>

          {/* Clean Rating Badge (No external link per user request) */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-800">
              <span className="text-sm font-black text-slate-900">5.0</span> / 5.0 Rating
            </div>
          </div>
        </div>

        {/* 3 Reviews Cards Grid (Clean 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-slate-500">{rev.timeAgo}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Client Review</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
