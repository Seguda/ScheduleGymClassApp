import React, { Component } from 'react';
import {
    ScrollView, StyleSheet, View
} from 'react-native';
import { gymclasses } from './Data';
import GymClassPoster from './GymClassPoster';

export default class GymClasses extends Component {
    render() {
    return(
      <View style = { styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {gymclasses.map((gymclass, index) => <GymClassPoster
                    gymclass={gymclass}
                    onOpnen={this.opengymclass}
                    key={index}
                    />)}
                </ScrollView>
      </View>
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