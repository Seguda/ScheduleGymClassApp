import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import DayandTime from './DayandTime';

const { width } = Dimensions.get('window');
const bttnWidth = width / 3.5;

export default class DayandTimeOptions extends Component {

    static propTypes = {
        options:PropTypes.array.isRequired,
        chosen: PropTypes.number,
        onChoose: PropTypes.func.isRequired,
    }
    render() {
        const { options, chosen, onChoose } = this.props;
        return (
            <View style={styles.container}>
            <ScrollView
                horizontal={true}
            >
                {options.map((value, index) =>
                <View style={{ width: bttnWidth }} key={index}>
                <DayandTime
                    value={value}
                    isChosen={index === chosen}
                    onChoose={() => onChoose(index)}
                        />
                </View>
                    )}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 20,
    },
    options: {
        flexDirection: 'row',
        marginRight: -10,
    },
});









