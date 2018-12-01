import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, scenes, mockData } from '../../constants';

const id1 = require('../../images/id1.png');
const id2 = require('../../images/id2.png');
const id3 = require('../../images/id3.png');
const id4 = require('../../images/id4.png');
const id5 = require('../../images/id5.png');
const id6 = require('../../images/id6.png');

class ChooseDistrict extends React.Component {
  getCurrentImage = id => {
    switch (id) {
      case 1:
        return id1;
      case 2:
        return id2;
      case 3:
        return id3;
      case 4:
        return id4;
      case 5:
        return id5;
      case 6:
        return id6;
      default:
        return id1;
    }
  };

  renderDistrictBtns = () => {
    return mockData.districts.map(district => {

      return (
        (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(scenes.DISTRICT_INFO, {
              district,
              imageDistrict: this.getCurrentImage(district.id)
            })}
            key={district.id}
          >
            <Text style={styles.buttonText}>{district.name}</Text>
          </TouchableOpacity>
        )
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Результати</Text>
        {this.renderDistrictBtns()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.LIST_DISTRICT_BACKGROUND,
  },
  text: {
    fontSize: 20,
    marginVertical: 30,
    textAlign: 'center',
    color: colors.MAIN_TEXT,
  },
  button: {
    width: '90%',
    height: 60,
    borderColor: colors.MAIN_TEXT,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.MAIN_TEXT,
    fontSize: 16,
  },
});

export default ChooseDistrict;
