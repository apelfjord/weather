import {Dimensions} from 'react-native';

export const notchCompensator = 50;

export const device = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export const template = {
    topFrame: device.height / 3,
    mainFrame: device.height - (device.height / 3),
}
