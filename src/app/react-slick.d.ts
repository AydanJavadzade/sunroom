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
  }
export interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    slidesToShow?: number;
    slidesToScroll?: number;
   
  };
}
  export default class Slider extends React.Component<Settings & React.PropsWithChildren<{}>> {}
}

  
  