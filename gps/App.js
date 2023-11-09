/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {api} from './Api';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [town, setTown] = useState('');

  useEffect(() => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const getTown = () => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${api}&q=${latitude}%2C${longitude}`,
      )
      .then(resp => {
        setTown(resp.data.AdministrativeArea.LocalizedName);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button title="Localiser" onPress={() => getTown()} />
      <Text>{town}</Text>
    </View>
  );
}

export default App;
