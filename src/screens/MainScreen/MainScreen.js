import React from 'react'

import {MainScreenContainer} from './styled'
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer'

export default class MainScreen extends React.Component {
    render() {
        return (
            <MainScreenContainer>
                <WeatherDisplayer/>
            </MainScreenContainer>
        )
    }
}
