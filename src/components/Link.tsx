import React from 'react';
import { useRouter } from '../context/RouterContext';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  onClick,
  children,
  className = '',
  ...rest
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If left-click without modifier keys, use client-side SPA navigation
    if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }
      navigate(to);
    }
    // Otherwise (right click context menu, middle click, ctrl/cmd click),
    // native browser behavior opens in new tab/window as expected!
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};
