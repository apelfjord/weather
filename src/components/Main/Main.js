import React from "react";

import {
  MainScreenContainer,
  MainScreenTextElement,
  MainScreenTextTitle
} from "./styled";

export default class MainScreen extends React.Component {
  render() {
    const data = this.props.data.parsedJsonData;
    if (!data) {
      return null;
    }
    if (data.cod !== '200') {
      return (
        <MainScreenContainer>
          <MainScreenTextTitle>Could not find city :´(</MainScreenTextTitle>
        </MainScreenContainer>
      );
    }

    return (
      <MainScreenContainer>
        <MainScreenTextTitle>{data.city.name}</MainScreenTextTitle>
        <MainScreenTextElement>{Math.floor(data.list[0].main.temp)} ℃</MainScreenTextElement>
        <MainScreenTextElement>{data.list[0].weather[0].main}</MainScreenTextElement>
      </MainScreenContainer>
    );
  }
}
