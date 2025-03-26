import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  generalDialogStyle: {
    alignSelf: 'center',
    width: '75%',
    height: 'auto',
  },
  dialog: {
    backgroundColor: '#E8F5E9', // Light green background
    borderRadius: 10,
  },
  successDialog: {
    backgroundColor: '#E8F5E9', // Light green background
  },
  errorDialog: {
    backgroundColor: '#FFEBEE', // Light red background
  },
  successTitle: {
    color: '#2E7D32', // Dark green title text
  },
  errorTitle: {
    color: '#C62828', // Dark red title text
  },
});

export default styles;
