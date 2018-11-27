import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, scenes, mockData } from '../../constants';


class ChooseDistrict extends React.Component {
  renderDistrictBtns = () => {
    return mockData.districts.map(district => {
      return (
        (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(scenes.DISTRICT_INFO, { district })}
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
