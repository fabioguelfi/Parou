import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

export default class Wallets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeUser: 0,
      longitudeUser: 0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitudeUser: position.coords.latitude,
        longitudeUser: position.coords.longitude
      });
    });
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.main}>
        <MapView
          initialRegion={{
            latitude: {this.state.latitudeUser},
            longitude: {this.state.latitudeUser},
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
