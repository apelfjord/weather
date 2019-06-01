import React from 'react';

import { AppContainer } from './styled';
import WeatherScreen from './screens/WeatherScreen/WeatherScreen'


export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <WeatherScreen/>
      </AppContainer>
    );
  }
}