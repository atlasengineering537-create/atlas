import React from 'react';
import { Link } from './Link';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-red-600 transition-colors"
          >
            Home
          </Link>
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
                  <Link
                    to={item.path}
                    className="hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </Link>
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
