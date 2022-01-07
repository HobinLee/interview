declare module '*.svg' {
  // const content: any;
  // export default content;
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}
