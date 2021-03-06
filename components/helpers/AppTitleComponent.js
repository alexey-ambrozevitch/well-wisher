import React from 'react';
import { Image, Text, View } from 'react-native';
import { icons, information } from '../../constants'
import styles from '../../styles'

export default class AppTitleComponent extends React.Component {
  render() {
    return ( 
      <View style={styles.appTitle}>
        <Image
          style={styles.appIcon}
          source={icons.WHITE_ICON}/>)} 
        />
        <Text style={styles.titleText}>{information.appName}</Text>
      </View>
    );
  }
}