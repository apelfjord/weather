import React from "react";

import {
  WeatherDisplayerContainer,
  WeatherDisplayerTitle,
  AlignRow,
  SubTitle
} from "./styled";
import Button from "../../common/Button/Button";
import TextInput from "../../common/TextInput/TextInput";

const url = "api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "5ded1c7ebb9b8243f08d55b1bd24fa25";

export default class WeatherDisplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
  }

  handleSearch = () => {
    const query = this.state.searchValue;
    const path = `http://${url}${query}&units=metric&cnt=1&appid=${apiKey}`;
    fetch(path)
      .then(data => data.json())
      .then(parsedJsonData => this.props.getData({ parsedJsonData }))
      .catch(err => console.log(err));
  };

  handleChange = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <WeatherDisplayerContainer>
        <WeatherDisplayerTitle>Weather Deluxe</WeatherDisplayerTitle>
        <SubTitle>We have the best weather</SubTitle>
        <AlignRow>
          <TextInput onChange={this.handleChange} />
          <Button title="Go!" onPress={this.handleSearch} />
        </AlignRow>
      </WeatherDisplayerContainer>
    );
  }
}
