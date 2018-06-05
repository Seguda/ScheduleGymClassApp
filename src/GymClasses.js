import React, { Component } from 'react';
import {
    ScrollView, StyleSheet,Text, View
} from 'react-native';
import { gymclasses } from './Data';
import GymClassPoster from './GymClassPoster';

export default class GymClasses extends Component {
    render() {
    return(
     
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 1000 }}>
                contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={true}
                >
                    {gymclasses.map((gymclass, index) => <GymClassPoster
                    gymclass={gymclass}
                    onOpnen={this.opengymclass}
                    key={index}
                    />)}
            </View>
                </ScrollView>
   
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,  
       
    },
    scrollContent: {
        flexDirection: 'row',   
        flexWrap: 'wrap',       
    },
});