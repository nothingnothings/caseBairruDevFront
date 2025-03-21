// RN-related
import { StyleProp, View, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Custom Components and Styles
import { COLORS } from '@/constants';

const svgMarkup = `
<svg
   id="svg1"
   viewBox="0 0 197.12 196.48">
  <g>
    <path
       style="fill:${COLORS.primary};stroke-width:0.25"
       d="m 39.309205,155.59675 v -40.5657 l 13.437499,-8.7953 c 7.390625,-4.83741 14.39375,-9.448461 15.5625,-10.246788 l 2.125,-1.451505 0.161797,-1.875001 c 0.08899,-1.03125 0.247815,-12.421875 0.352953,-25.312497 0.105135,-12.890625 0.257327,-23.433998 0.338202,-23.429718 0.08088,0.0043 12.128298,7.805488 26.772048,17.336013 l 26.624986,17.328227 0.125,18.276633 c 0.08,11.691956 0.21508,18.362816 0.375,18.515866 0.27808,0.26609 10.39623,6.92386 23.8108,15.66755 l 8.8108,5.74292 0.002,29.6875 0.002,29.6875 H 98.560804 39.310805 Z"
       id="path1" />
  </g>
</svg>




`;

type CompanyIconProps = {
  style?: StyleProp<ViewStyle>;
};

const CompanyIcon = ({ style }: CompanyIconProps) => {
  return (
    <View>
      <SvgXml xml={svgMarkup} style={style} />
    </View>
  );
};

export default CompanyIcon;
