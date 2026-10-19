import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'forest' | 'ghost' | 'ghost-light' | 'paper' | 'lime' | 'red' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = 'forest',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body rounded-pill transition-all duration-250 cursor-pointer select-none no-underline font-medium';

  const sizeStyles = {
    sm: 'text-13 px-4 py-2 gap-2 min-h-[36px]',
    md: 'text-15 px-6 py-3 gap-2.5 min-h-[44px]',
    lg: 'text-17 px-8 py-4 gap-3 min-h-[52px]',
  };

  const variantStyles = {
    forest:
      'bg-[#D9271C] text-white hover:bg-[#F04435] active:bg-[#14264B] shadow-sm',
    ghost:
      'bg-transparent text-[#20232A] border border-[#DCE1EA] hover:border-[#20232A] hover:text-[#687181] hover:bg-[#F4F6FC]/40',
    'ghost-light':
      'bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/10',
    paper:
      'bg-paper text-[#20232A] border border-paper hover:bg-paper-secondary hover:border-paper-secondary',
    lime:
      'bg-[#D9271C] text-white hover:bg-[#F04435] active:bg-[#14264B] shadow-sm',
    red:
      'bg-[#D9271C] text-white hover:bg-[#F04435] active:bg-[#14264B] shadow-sm',
    navy:
      'bg-[#14264B] text-paper hover:bg-[#F04435] active:bg-[#14264B] shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          aria-label={ariaLabel}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
