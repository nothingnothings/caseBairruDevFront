declare module '@env' {
  export const APP_URL_ENDPOINT: string;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}
