import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {colors, scenes} from '../../constants';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Дізнатись показник екокомфорту у твоєму районі</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate(scenes.CHOOSE_DISTRICT)}
        >
          <Text style={styles.buttonText}>СТАРТ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: colors.MAIN_TEXT,
  },
  button: {
    width: 150,
    height: 150,
    borderColor: colors.MAIN_TEXT,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
  },
  buttonText: {
    color: colors.MAIN_TEXT,
    fontSize: 18,
  },
});

export default Main;
