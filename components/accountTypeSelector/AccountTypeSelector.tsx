import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './accountTypeSelector.style';
import CompanyIcon from '../common/icons/company/Company';
import TabibitoIcon from '../common/icons/tabibito/Tabibito';
import { Card } from 'react-native-paper';

type AccountTypeSelectorProps = {
  onSelect: (type: 'tabibito' | 'company') => void;
};

const AccountTypeSelector = ({ onSelect }: AccountTypeSelectorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Are you a Person, or are you a Company?
      </Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => onSelect('tabibito')}
          style={styles.accountBtn}
        >
          <Card style={styles.accountBtnCard}>
            <TabibitoIcon style={styles.icon} />
            <Text style={styles.cardText}>Person</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSelect('company')}
          style={styles.accountBtn}
        >
          <Card style={styles.accountBtnCard}>
            <CompanyIcon style={styles.icon} />
            <Text style={styles.cardText}>Company</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountTypeSelector;
