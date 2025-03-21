import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import styles from './QRCode.style';

type QRCodeProps = {
  value: string;
  size: number;
  color: string;
  backgroundColor: string;
};

const QRCodeComponent = ({
  value,
  size,
  color,
  backgroundColor,
}: QRCodeProps) => {
  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', justifyContent: 'center', flex: 1 },
      ]}
    >
      <QRCode
        value={value} // This is the string to encode
        size={size} // The size of the QR code
        color="black" // Color of the QR code
        backgroundColor="white" // Background color of the QR code
      />
    </View>
  );
};

export default QRCodeComponent;
