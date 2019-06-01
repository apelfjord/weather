import React from 'react'
import {View} from 'react-native'

const url = 'api.openweathermap.org/data/2.5/forecast?q='
const countryCode = 'se'
const apiKey = '5ded1c7ebb9b8243f08d55b1bd24fa25'


export default class WeatherFetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    
    componentWillMount() {
        const query = this.props.query || 'stockholm';
        const path = `http://${url}${query},${countryCode}&appid=${apiKey}`
        
        fetch(path)
        .then(data => data.json())
        .then(jsonData => JSON.stringify((jsonData)))
        .then(parsedJsonData => this.setState({parsedJsonData}))
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state)
        return (
           <View/>
        )
    }
}
