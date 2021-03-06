import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import { WIDTH, Normalize } from '../helpers';

export class Button extends Component {
  render() {
    const { children, containerStyle, textStyle, rightIcon, rightIconStyle, leftIcon, leftIconStyle } = this.props;
    return(
      <TouchableOpacity {...this.props} style={[styles.container, containerStyle]}>
        {leftIcon && <Image source={leftIcon} style={[styles.icon, styles.left, leftIconStyle]} />}
        {children && <Text style={[styles.text, textStyle]}>{children}</Text>}
        {rightIcon && <Image source={rightIcon} style={[styles.icon, styles.right, rightIconStyle]} />}
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d3d3d',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    width: WIDTH - 40,
    height: 50,
  },
  text: {
    alignSelf: 'center',
    fontSize: Normalize(16),
    color: 'white',
    fontWeight: 'bold'
  },
  icon: {
    position: 'absolute',
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  left: {
    left: 20
  },
  right: {
    right: 20
  }
});