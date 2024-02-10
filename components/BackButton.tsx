import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles.ts';
import {TouchableOpacity} from 'react-native';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.roundedButton}
      onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} />
    </TouchableOpacity>
  );
};
