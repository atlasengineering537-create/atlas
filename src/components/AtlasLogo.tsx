import React from 'react';

interface AtlasLogoProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export const AtlasLogo: React.FC<AtlasLogoProps> = ({
  className = 'h-11',
  variant = 'full',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Globe Icon with 'SINCE 1991' above and 'SAURABH' underneath */}
      <div className="flex flex-col items-center shrink-0">
        <span className="text-[7.5px] sm:text-[8px] font-extrabold tracking-[0.14em] text-black mb-0.5 uppercase">
          SINCE 1991
        </span>
        <svg
          viewBox="0 0 100 68"
          className="h-8 sm:h-9 w-auto text-black"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle/ellipse of globe */}
          <ellipse cx="50" cy="34" rx="46" ry="28" stroke="currentColor" strokeWidth="3" fill="#18181b" />
          
          {/* Latitude lines */}
          <line x1="5" y1="34" x2="95" y2="34" stroke="#ffffff" strokeWidth="2" />
          <ellipse cx="50" cy="34" rx="43" ry="14" stroke="#ffffff" strokeWidth="1.8" fill="none" />
          <line x1="16" y1="20" x2="84" y2="20" stroke="#ffffff" strokeWidth="1.6" />
          <line x1="16" y1="48" x2="84" y2="48" stroke="#ffffff" strokeWidth="1.6" />
          <line x1="28" y1="12" x2="72" y2="12" stroke="#ffffff" strokeWidth="1.2" />
          <line x1="28" y1="56" x2="72" y2="56" stroke="#ffffff" strokeWidth="1.2" />

          {/* Longitude lines */}
          <line x1="50" y1="6" x2="50" y2="62" stroke="#ffffff" strokeWidth="2" />
          <ellipse cx="50" cy="34" rx="20" ry="28" stroke="#ffffff" strokeWidth="1.8" fill="none" />
          <ellipse cx="50" cy="34" rx="34" ry="28" stroke="#ffffff" strokeWidth="1.6" fill="none" />
        </svg>
        <span className="text-[7.5px] sm:text-[8px] font-extrabold tracking-[0.14em] text-black -mt-0.5 uppercase">
          SAURABH
        </span>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span 
            className="text-[28px] sm:text-[33px] font-black italic tracking-tighter text-[#DE1F27] leading-none [text-shadow:_0_0_1px_#DE1F27]"
            style={{ 
              fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 950,
              letterSpacing: '-0.04em'
            }}
          >
            ATLAS
          </span>
          <span 
            className="text-[23px] sm:text-[27px] font-black italic tracking-wide text-[#DE1F27] leading-none inline-block origin-bottom -skew-x-6 [text-shadow:_0_0_1.5px_#DE1F27,_0_0_1px_#DE1F27]"
            style={{ 
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 950,
              WebkitTextStroke: '0.6px #DE1F27'
            }}
          >
            ENGINEERING
          </span>
        </div>
        {variant === 'full' && (
          <div 
            className="flex flex-col text-[10px] sm:text-[11.5px] font-bold tracking-tight text-[#8B181B] mt-1 leading-[1.25] hidden sm:flex"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <span>Manufacturer of Bitumen Modify Plant,</span>
            <span>Road &amp; Civil Construction Equipment</span>
          </div>
        )}
      </div>
    </div>
  );
};
