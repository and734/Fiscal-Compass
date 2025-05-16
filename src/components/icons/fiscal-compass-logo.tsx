import type { SVGProps } from 'react';

export function FiscalCompassLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`inline-block ${props.className || ''}`}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5"/>
      <path d="M50 15V35M50 85V65M15 50H35M85 50H65" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <path d="M35.5025 35.5025L49.6447 49.6447M64.5 64.5L50.3578 50.3578M35.5025 64.4975L49.6447 50.3553M64.4975 35.5025L50.3553 49.6447" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="10" fill="currentColor"/>
    </svg>
  );
}
