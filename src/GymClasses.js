import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, View
} from 'react-native';
import { gymclasses } from './Data';
/* import Modal from "react-native-modal";  */
import GymClassPoster from './GymClassPoster';
import GymClassDisplay from './GymClassDisplay';


export default class GymClasses extends Component {
    state = {
        displayIsOpen: false,
        chosenDay: 0,
        chosenTime: null,
    }
    opengymclass = (gymclass) => {
        this.setState({
            displayIsOpen: true,
            gymclass,
        });
    }

    closegymclass = () => {
        this.setState({
            displayIsOpen: false,
            chosenDay:0,
            chosenTime:null,
        });
    }

    chooseDay = (day) => {
        this.setState({
            chosenDay: day,
        });
    }

    chooseTime = (time) => {
        this.setState({
            chosenTime: time,
        });
    }
    scheduleAclass = () =>{
        if (!this.state.chosenTime) {
          
        } else {
            this.closegymclass();
            this.props.navigator.push({
                name: 'confirmationnumber',
                number: Math.random().toString(36).substring(6).toUpperCase(),
            });
        }
    }
    

    render() {
    return(
      <View style = { styles.container}>
            <ScrollView
                    contentContainerStyle={styles.scrollContent}
                >
                    {gymclasses.map((gymclass, index) => <GymClassPoster
                    gymclass={gymclass}
                    onOpen={this.opengymclass}
                    key={index}
                    />)}
                </ScrollView>
            <GymClassDisplay
                gymclass={this.state.gymclass}
                isOpen={this.state.displayIsOpen}
                onClose={this.closegymclass}
                chosenDay={this.state.chosenDay}
                chosenTime={this.state.chosenTime}
                onChooseDay={this.chooseDay}
                onChooseTime={this.chooseTime}
                onSchedule={this.scheduleAclass}
            />
      </View>
    );
 }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,  
      
    },
    scrollContent: {
        flexDirection: 'row',   
        flexWrap: 'wrap',       
    },
});