import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATTITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;

export default class Wallets extends Component {

  constructor(props) {
    super(props)

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(p => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
    })

    var initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
    this.setState({initialPosition: initialRegion})
    this.setState({markerPosition: initialPosition})
  }
  (error) => alert(JSON.stringify(error)),
  {enableHightAccuracy: true, timeout: 20000, maximumAge: 1000},

  this.watchID = navigator.geolocation.watchPosition(position => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)

    var lastRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    this.setState({initialPosition: lastRegion})
    this.setState({markerPosition: lastRegion})

  })

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={styles.main}>
        <MapView
        region={this.state.initialPosition}
        style={{ flex: 1 }}
        >
        <MapView.Marker
        coordinate={this.state.markerPosition}
        />
        </MapView>
      </View>
    );
  }
}
