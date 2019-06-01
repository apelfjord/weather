import React from 'react'

import {WeatherScreenContainer} from './styled'
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer'
import Main from '../../components/Main/Main';

export default class TopScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: ''};
    }

    getData = (data) => {
        this.setState({data})
    }

    render() {
        return (
            <WeatherScreenContainer>
                <WeatherDisplayer getData={this.getData}/>
                <Main data={this.state.data}/>
            </WeatherScreenContainer>
        )
    }
}
