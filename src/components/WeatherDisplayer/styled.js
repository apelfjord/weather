import styled from 'styled-components/native';

import {template, notchCompensator} from '../../constans/layout'

export const WeatherDisplayerContainer = styled.View`
      align-items: center;
      height: ${template.topFrame - notchCompensator};
      overflow: hidden;
  `
  
export const WeatherDisplayerTitle = styled.Text`
    font-size: 40;
    margin-bottom: 10;
`
export const SubTitle = styled.Text`
    font-size: 20;
    margin-bottom: 20;
    font-style: italic;
`

export const AlignRow = styled.View`
    flex-direction: row;
`