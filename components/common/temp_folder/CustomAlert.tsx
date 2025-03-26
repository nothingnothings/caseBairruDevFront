import * as React from 'react';
import { Button, Dialog, Portal, Paragraph } from 'react-native-paper';
import styles from './alert.style';

type CustomAlertProps = {
  visible: boolean;
  onDismiss: () => void;
  message: string; // Only the message prop
};

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  onDismiss,
  message,
}) => {
  return (
    <Portal>
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
        style={[styles.generalDialogStyle, styles.errorDialog]} // Apply error dialog style
      >
        <Dialog.Title style={styles.errorTitle}>Erro</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomAlert;
