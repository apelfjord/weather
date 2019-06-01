import styled from 'styled-components/native';

import {template, notchCompensator} from '../../constans/layout'

export const WeatherDisplayerContainer = styled.View`
      background-color: white;
      align-items: center;
      height: ${template.topFrame - notchCompensator};
      overflow: hidden;
  `
  
export const WeatherDisplayerTitle = styled.Text`
    font-size: 40;
`
export const AlignRow = styled.View`
    flex-direction: row;
`