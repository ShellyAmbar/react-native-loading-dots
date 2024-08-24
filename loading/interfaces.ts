import {ViewStyle} from 'react-native';

interface ILoadingDotsProps {
  dotCount: number;
  dotSize: number;
  dotSpacing: number;
  duration: number;
  colors?: string[];
  dotStyle?: ViewStyle;
}

export default ILoadingDotsProps;
