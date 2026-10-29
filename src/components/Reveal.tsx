import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function Reveal({ children, className = '', delay, as = 'div' }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
