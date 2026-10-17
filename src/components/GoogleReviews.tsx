import React from 'react';
import { GOOGLE_REVIEWS } from '../data/reviews';
import { Star, ExternalLink, ThumbsUp } from 'lucide-react';

export const GoogleReviews: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <section className={`py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 mb-3">
              {/* Google G logo */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Verified Google Business Profile Reviews</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Authentic reviews and testimonials shared by infrastructure contractors and engineers on our official Google Business profile.
            </p>
          </div>

          {/* Aggregate Rating & Map Link */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs shrink-0">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">5.0</div>
              <div className="flex items-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Google Rating</div>
              <a
                href="https://www.google.com/maps?q=23.03368,72.68170"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1 mt-0.5"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative shrink-0">
                    <div
                      className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-2xs`}
                    >
                      {review.initials}
                    </div>
                    {review.isLocalGuide && (
                      <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-xs"
                        title="Google Local Guide"
                      >
                        ★
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug truncate">
                      {review.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {review.isLocalGuide ? (
                        <span>
                          Local Guide · {review.reviewsCount} reviews
                          {review.photosCount ? ` · ${review.photosCount} photos` : ''}
                        </span>
                      ) : (
                        <span>{review.reviewsCount} reviews</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Star Rating and Time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-[#FBBC04]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500">{review.timeAgo}</span>
                </div>

                {/* Exact Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Card Footer with Google Icon and subtle reaction */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google Review</span>
                </span>

                {review.likes ? (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <span>🙏</span>
                    <span>{review.likes}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
