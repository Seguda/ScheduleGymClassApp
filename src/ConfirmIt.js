import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import { defaultStyles } from './styles';

export default class ConfirmIt extends Component {

    static propTypes = {
        number: PropTypes.string.isRequired,
    }
    render() {
        const { number } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Confirmation Number</Text>
                <Text style={styles.number}>{number}</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigator.pop()}
                    >
                    <Text style={styles.button}>Done</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        ...defaultStyles.text,
        color: 'black',
        fontSize: 25,
    },
    number: {
        ...defaultStyles.text,
        color: 'black',
        fontSize: 25,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 50,
        margin: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    button: {
        ...defaultStyles.text,
        color: '#FFFFFF',
        fontSize: 18,
    },
});