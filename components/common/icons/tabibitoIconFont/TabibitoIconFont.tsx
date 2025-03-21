import { createIconSet } from 'react-native-vector-icons';
import glyphMap from './customIconGlyphMap.json'; // Contains your custom font's mapping

const TabibitoIconFont = createIconSet(
  glyphMap,
  'tabibito', // Font family name
  'tabibito.ttf'
);

export default TabibitoIconFont;
