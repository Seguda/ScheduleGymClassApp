import React, { Component } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text,TouchableHighlight,
    TouchableWithoutFeedback, View } from 'react-native';
import { defaultStyles } from './styles';
import PropTypes from 'prop-types';
import DayandTimeOptions from './DayandTimeOptions';

const { width, height } = Dimensions.get('window');
const defaultHeight = height * 2/3;


export default class GymClassDisplay extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        gymclass: PropTypes.object,
        chosenDay: PropTypes.number,
        chosenTime: PropTypes.number,
        onChooseDay: PropTypes.func,
        onChooseTime: PropTypes.func,
        onSchedule: PropTypes.func,
        onClose: PropTypes.func,
    }

    state = {
        position: new Animated.Value(this.props.isOpen ? 0 : height),
        visible: this.props.isOpen,
        opacity: new Animated.Value(0),
        expanded: false,
        height: defaultHeight,
    };
  



    componentWillReceiveProps(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen) {
            this.animateOpen();
        }
        else if (this.props.isOpen && !nextProps.isOpen) {
            this.animateClose();
        }
    }
    animateOpen() {
        this.setState({ visible: true }, () => {
          Animated.parallel([
            Animated.timing(
                this.state.opacity, { toValue: 0.5 }),  
            Animated.timing(
                this.state.position, { toValue: 0 }),
        ]).start();
        });
    }
    animateClose() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity, { toValue: 0 }),  
        Animated.timing(
            this.state.position, { toValue: height }),
    ]).start(() => this.setState({ 
        visible: false,
        height: defaultHeight,
    }));
    }

    getStyles = () => {
        return {
            imageContainer:{
                maxWidth: 100,            
                marginRight: 10,
                maxHeight:60,
                },
            gymclassContainer:{
                flexDirection: 'row',     
                },
            title:{
                textAlign: 'left',
            },
        }}
    render() {
        const {
            gymclass,
            chosenDay,
            chosenTime,
            onChooseDay,
            onChooseTime,
            onSchedule,
        } = this.props;
        const { title, poster, room, days, times } = gymclass || {};

        if (!this.state.visible) {
            return null;
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.props.onClose}>
                    <Animated.View style={[styles.backdrop, {opacity: this.state.opacity }]} />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.modal, {
                        height: this.state.height,
                    }]}
                >s
            <View style={styles.content}>
                <View
                   style={[styles.gymclasseContainer, this.getStyles().gymclassContainer]}

            >
            <View style={[styles.imageContainer, this.getStyles().imageContainer]}>
                <Image source={{ uri: poster }} style={styles.image} />
            </View>

            <View>
                <Text style={[styles.title, this.getStyles().title]}>{title}</Text>
                <Text style={styles.room}>{room}</Text>
            </View>
                </View>

            <View>
                <Text style={styles.sectionHeader}>Day</Text>
                    <DayandTimeOptions
                       options={days}
                        chosen={chosenDay}
                        onChoose={onChooseDay}
                    />
                <Text style={styles.sectionHeader}>Time</Text>
                    <DayandTimeOptions
                        options={times}
                        chosen={chosenTime}
                        onChoose={onChooseTime}
                     />
            </View>

            </View>

            <View style={styles.footer}>
                <TouchableHighlight
                    underlayColor="#9575CD"
                    style={styles.buttonContainer}
                    onPress={onSchedule}
                >
                    <Text style={styles.button}>Schedule a Class</Text>
                </TouchableHighlight>
            </View>

                </Animated.View> 
            </View>
        );
    }
        }

const styles = StyleSheet.create({
  
    container: {
        ...StyleSheet.absoluteFillObject,  
        justifyContent: 'flex-end',         
        backgroundColor: 'transparent', 
      
    },
  
    backdrop: {
        ...StyleSheet.absoluteFillObject,  
        backgroundColor: 'black',
    },
 
    modal: {  
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        margin: 20,
        marginBottom: 0,
    },
    gymclassContainer: {
        flex: 1,                           
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,                            
    },
    image: {
        borderRadius: 10,   
        height: 60,         
        ...StyleSheet.absoluteFillObject,   
    },
    gymclassInfo: {
        backgroundColor: 'transparent',    
    },
    title: {
        ...defaultStyles.text,
        fontSize: 20,
    },
    room: {
        ...defaultStyles.text,
        color: '#BBBBBB',
        fontSize: 14,
    },
    sectionHeader: {
        ...defaultStyles.text,
        color: '#AAAAAA',
        marginTop:60,
    },
    footer: {
        padding: 60,
    },
    buttonContainer: {
        backgroundColor: 'blue',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    button: {
        ...defaultStyles.text,
        color: '#FFFFFF',
        fontSize: 18,
    },

});
    