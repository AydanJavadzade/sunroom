declare module 'react-slick' {
  import * as React from 'react';

  export interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  export interface ResponsiveSettings {
    breakpoint: number;
    settings: Settings;
  }

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    nextArrow?: React.ReactElement<CustomArrowProps>;
    prevArrow?: React.ReactElement<CustomArrowProps>;
    responsive?: ResponsiveSettings[];
    // Other settings can be added here
  }
  // ResponsiveSettings interface
export interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    slidesToShow?: number;
    slidesToScroll?: number;
    // Diğer slide ayarları buraya eklenebilir
  };
}

  export default class Slider extends React.Component<Settings & React.PropsWithChildren<{}>> {}
}

  
  