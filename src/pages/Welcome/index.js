import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  goToNext = () => {
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });
    dispatch(resetAction);
    this.props.navigation.navigate('Wallets');
  };

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={this.goToNext}>
          <Text>Welcome</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
