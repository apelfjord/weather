import React from 'react'

import {TopScreenContainer} from './styled'
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer'

export default class TopScreen extends React.Component {
    render() {
        return (
            <TopScreenContainer>
                <WeatherDisplayer/>
            </TopScreenContainer>
        )
    }
}
