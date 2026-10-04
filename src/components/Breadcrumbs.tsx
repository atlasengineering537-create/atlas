import React from 'react';
import { useRouter } from '../context/RouterContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
        <li>
          <button
            onClick={() => navigate('/')}
            className="hover:text-red-600 transition-colors"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <span className="text-slate-300" aria-hidden="true">
                /
              </span>
              <li className={isLast ? 'text-slate-900 font-semibold' : ''}>
                {item.path && !isLast ? (
                  <button
                    onClick={() => navigate(item.path!)}
                    className="hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
