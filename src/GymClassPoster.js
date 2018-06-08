import React, { Component} from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { defaultStyles } from './styles';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');
const cols = 2, rows = 2;

export default class GymClassPoster extends Component {
    static propTypes = {
       gymclass: PropTypes.object.isRequired,
        onOpen: PropTypes.func.isRequired,
    }
    render() {
        const { gymclass, gymclass: { title, room, poster }, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(gymclass)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: poster }} style={styles.image} />
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.room} numberOfLines={1}>{room}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 10) / rows - 60,
        width: (width - 10) / cols - 10,
    },
    imageContainer: {
        flex: 1,                          
    },
    image: {
        borderRadius: 10,                 
        ...StyleSheet.absoluteFillObject, 
    },
    key: {
        ...defaultStyles.text,
        fontSize: 14,
        marginTop: 4,
    },
    room: {
        ...defaultStyles.text,
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14,
    },
});