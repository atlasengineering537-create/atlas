import React from 'react';

interface AtlasLogoProps {
  className?: string;
  variant?: 'full' | 'compact';
  size?: 'default' | 'large';
}

export const AtlasLogo: React.FC<AtlasLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'default',
}) => {
  const isLarge = size === 'large';

  return (
    <div className={`inline-flex items-center ${isLarge ? 'gap-4 sm:gap-6' : 'gap-3'} select-none ${className}`}>
      {/* Globe Icon with 'SINCE 1991' above and 'SAURABH' underneath */}
      <div className="flex flex-col items-center shrink-0">
        <span className={`${isLarge ? 'text-[9.5px] sm:text-[11px] mb-1' : 'text-[7.5px] sm:text-[8px] mb-0.5'} font-extrabold tracking-[0.14em] text-black uppercase`}>
          SINCE 1991
        </span>
        <svg
          viewBox="0 0 100 52"
          className={`${isLarge ? 'h-11 sm:h-14 md:h-16 w-auto' : 'h-7 sm:h-8 w-auto'}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Softer charcoal/graphite globe body (not harsh pitch black) */}
          <ellipse cx="50" cy="26" rx="46" ry="20" fill="#2E3138" stroke="#22242A" strokeWidth="0.8" />
          
          <g fill="none" stroke="#FFFFFF" strokeLinecap="round">
            {/* Equator */}
            <line x1="4" y1="26" x2="96" y2="26" strokeWidth="1.3" />
            {/* Latitude parallels */}
            <ellipse cx="50" cy="26" rx="46" ry="7" strokeWidth="1.15" />
            <ellipse cx="50" cy="26" rx="46" ry="14" strokeWidth="1.15" />
            {/* Prime meridian */}
            <line x1="50" y1="6" x2="50" y2="46" strokeWidth="1.3" />
            {/* Longitude meridians */}
            <ellipse cx="50" cy="26" rx="16" ry="20" strokeWidth="1.15" />
            <ellipse cx="50" cy="26" rx="31" ry="20" strokeWidth="1.15" />
          </g>
        </svg>
        <span className={`${isLarge ? 'text-[9.5px] sm:text-[11px] mt-1' : 'text-[7.5px] sm:text-[8px] -mt-0.5'} font-extrabold tracking-[0.14em] text-black uppercase`}>
          SAURABH
        </span>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5 sm:gap-2 flex-nowrap whitespace-nowrap">
          <span 
            className={`${isLarge ? 'text-2xl sm:text-3xl md:text-4xl lg:text-[42px]' : 'text-[26px] sm:text-[31px]'} font-black italic tracking-tighter text-[#DE1F27] leading-none whitespace-nowrap [text-shadow:_0_0_1px_#DE1F27]`}
            style={{ 
              fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 950,
              letterSpacing: '-0.04em'
            }}
          >
            ATLAS
          </span>
          <span 
            className={`${isLarge ? 'text-xl sm:text-2xl md:text-3xl lg:text-[34px]' : 'text-[21px] sm:text-[25px]'} font-black italic tracking-wide text-[#DE1F27] leading-none inline-block origin-bottom -skew-x-6 whitespace-nowrap [text-shadow:_0_0_1.5px_#DE1F27,_0_0_1px_#DE1F27]`}
            style={{ 
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 950,
              WebkitTextStroke: isLarge ? '0.7px #DE1F27' : '0.6px #DE1F27'
            }}
          >
            ENGINEERING
          </span>
        </div>
        {variant === 'full' && (
          <div 
            className={`flex flex-col ${isLarge ? 'text-xs sm:text-sm md:text-base mt-2.5 leading-snug' : 'text-[10px] sm:text-[11.5px] mt-1 leading-[1.25] hidden sm:flex'} font-bold tracking-tight text-[#8B181B]`}
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
