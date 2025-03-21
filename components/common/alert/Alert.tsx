// React-related
import * as React from 'react';

// RN-related
import { Button, Dialog, Portal, Paragraph } from 'react-native-paper';

// Custom Components and Styles
import styles from './alert.style';

type CustomAlertProps = {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error'; // Optional type prop
};

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  onDismiss,
  title,
  message,
  type = 'success', // Default to success
}) => {
  // Dynamic styles based on alert type
  const dialogStyle =
    type === 'success' ? styles.successDialog : styles.errorDialog;
  const titleStyle =
    type === 'success' ? styles.successTitle : styles.errorTitle;

  return (
    <Portal>
      <>
        <Dialog
          visible={visible}
          onDismiss={onDismiss}
          theme={{
            colors: {
              primary: 'white',
            },
            roundness: 3,
            dark: false,
            fonts: {
              default: {
                fontFamily: 'DMMedium',
                fontWeight: 'normal',
                fontStyle: 'normal',
              },
            },
          }}
          style={[styles.generalDialogStyle, dialogStyle]} // Apply dialog style
        >
          <Dialog.Title style={titleStyle}>{title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{message}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onDismiss}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    </Portal>
  );
};

export default CustomAlert;
