import React from 'react'

import {WeatherDisplayerContainer, WeatherDisplayerTitle} from './styled'

export default class WeatherDisplayer extends React.Component {
    render() {
        return (
            <WeatherDisplayerContainer>
                <WeatherDisplayerTitle>
                    From WeatherDisplayer
                </WeatherDisplayerTitle>
            </WeatherDisplayerContainer>
        )
    }
}
