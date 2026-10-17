import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919825073095';
  const defaultMessage = encodeURIComponent(
    'Hello Atlas Engineering, I would like to inquire about your machinery & equipment.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
    >
      {/* Tooltip Label (Expands on Hover or subtle on desktop) */}
      <div
        className={`hidden sm:flex items-center bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-xs border border-white/10 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Chat on WhatsApp · +91 98250 73095</span>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Atlas Engineering on WhatsApp (+91 98250 73095)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Official Icon */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.502 2 2.012 6.486 2.012 12.01c0 1.968.568 3.864 1.644 5.485L2 22l4.675-1.619a9.96 9.96 0 0 0 5.356 1.54h.005c5.526 0 10.016-4.487 10.016-10.01c0-2.673-1.04-5.187-2.932-7.079A9.95 9.95 0 0 0 12.031 2zm0 18.324h-.004a8.318 8.318 0 0 1-4.237-1.162l-.304-.18-2.778.962.977-2.709-.198-.316a8.27 8.27 0 0 1-1.282-4.469c0-4.577 3.725-8.303 8.307-8.303 2.217 0 4.302.864 5.87 2.433a8.25 8.25 0 0 1 2.431 5.875c0 4.578-3.725 8.304-8.307 8.304zm4.551-6.216c-.249-.125-1.477-.729-1.706-.812-.229-.083-.396-.125-.562.125-.167.249-.646.812-.792.979-.146.166-.291.187-.541.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.482-1.391-1.732-.146-.249-.016-.384.109-.508.113-.112.25-.291.375-.437.125-.146.167-.25.25-.416.083-.166.042-.312-.021-.437-.062-.125-.562-1.353-.771-1.854-.203-.489-.41-.422-.562-.43l-.479-.009c-.167 0-.437.062-.667.312-.229.25-.874.854-.874 2.083 0 1.229.896 2.416 1.021 2.583.125.166 1.764 2.694 4.274 3.778.597.258 1.064.412 1.428.528.6.191 1.146.164 1.578.099.481-.072 1.477-.604 1.686-1.187.208-.583.208-1.083.146-1.187-.063-.105-.23-.167-.479-.292z" />
        </svg>
      </a>
    </aside>
  );
};
