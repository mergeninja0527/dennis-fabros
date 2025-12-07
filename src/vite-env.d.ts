/// <reference types="vite/client" />

declare module 'virtual:icons/*' {
  import { FC, SVGProps } from 'react';
  const component: FC<SVGProps<SVGSVGElement>>;
  export default component;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'i-uiw-appstore-o': React.DetailedHTMLProps<React.SVGAttributes<SVGSVGElement>, SVGSVGElement>;
      'i-mingcute-align-justify-fill': React.DetailedHTMLProps<React.SVGAttributes<SVGSVGElement>, SVGSVGElement>;
      [key: `i-${string}`]: React.DetailedHTMLProps<React.SVGAttributes<SVGSVGElement>, SVGSVGElement>;
    }
  }
}