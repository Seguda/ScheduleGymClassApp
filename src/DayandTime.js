import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Animated, StyleSheet,Text,TouchableOpacity,} from 'react-native';
import { defaultStyles } from './styles';

const colorDefault = '#ffffff',  
      colorSelected = 'blue';   

export default class DayandTime extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        isChosen: PropTypes.bool.isRequired,
        onChoose: PropTypes.func.isRequired,
    }
    state = {
        background: new Animated.Value(0)
    }
    componentWillMount() {
        if (this.props.isChosen) {
            this.animateSelect();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.isChosen && nextProps.isChosen) {
            this.animateSelect();
        } else if (this.props.isChosen && !nextProps.isChosen) {
            this.animateCancel();
        }
    }

    animateSelect() {
        Animated.timing(this.state.background, {
            toValue: 100,
        }).start();
    }
    animateCancel() {
    Animated.timing(this.state.background, {
      toValue: 0,
    }).start();
  }
render() {
    const { value, isChosen, onChoose } = this.props;
    const colorAnimation = this.state.background.interpolate({
      inputRange: [0, 100],
      outputRange: [colorDefault, colorSelected],
    });
    return (
      <TouchableOpacity
        onPress={onChoose}
      >
        <Animated.View
          style={[styles.container, { backgroundColor: colorAnimation }]}
        >
        <Text style={{color:isChosen ? colorDefault : colorSelected }}>
            {value}
        </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: colorSelected,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  text: {
    ...defaultStyles.text,
  }
});



