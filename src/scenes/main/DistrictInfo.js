import React, { Fragment } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { colors, scenes } from '../../constants';

const width = Dimensions.get('window').width;

class DistrictInfo extends React.Component {
  state = {
    isFirstMonth: true,
  };

  renderChangeMonth = (date) => {
    const arrow_back = require('../../images/arrow_back.png');
    const arrow_forward = require('../../images/arrow_forward.png');
    const { isFirstMonth } = this.state;
    return (
      <View style={styles.buttonWrapper}>
        {
          isFirstMonth &&
          <TouchableOpacity
            style={[styles.changeDateButton, {left: 3}]}
            onPress={() => this.setState({ isFirstMonth: !this.state.isFirstMonth })}
          >
            <Image source={arrow_back} style={styles.backImage} />
          </TouchableOpacity>
        }
        <View style={styles.showDateBlock}>
          <Text style={styles.textBtn}>{date}</Text>
        </View>
        {
          !isFirstMonth &&
          <TouchableOpacity
            style={[styles.changeDateButton, {right: 3}]}
            onPress={() => this.setState({ isFirstMonth: !this.state.isFirstMonth })}
          >
            <Image source={arrow_forward} style={styles.backImage} />
          </TouchableOpacity>
        }
      </View>
    );
  };

  calculateReit = (dataForRendering) => {
    const { x1, x2, x3, x4 } = dataForRendering.ecoValues;
    return (0.30*x1 + 0.30*x2 - 0.10*x3 + 0.30*x4);
  };

  render() {
    const image = require('../../images/arrow_back.png');

    const { district, imageDistrict } = this.props.navigation.state.params;
    const dataForRendering = district.content[this.state.isFirstMonth ? 'first' : 'second'];
    const { x1, x2, x3, x4, textX1, textX2, textX3, textX4 } = dataForRendering.ecoValues;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate(scenes.CHOOSE_DISTRICT)}
          >
            <Image source={image} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.titleText}>{district.name}</Text>
          <Text style={styles.titleText}>  </Text>
        </View>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.containerScrollView}>
          <Image source={imageDistrict} style={styles.image}/>
          <Text style={styles.titleTextPercent}>{this.calculateReit(dataForRendering)}%</Text>
          <Text style={styles.text}>
            Чистота повітря: {textX1}
          </Text>
          <Text style={styles.text}>
            Чистота води: {textX2}
          </Text>
          <Text style={styles.text}>
            Виробництво: {textX4}
          </Text>
          <Text style={styles.text}>
            Зелені насадження: {textX3}
          </Text>
          {this.renderChangeMonth(dataForRendering.date)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.MAIN_BACKGROUND,
  },
  titleContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  titleTextPercent: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 5,
  },
  backImage: {
    width: 30,
    height: 30,
  },
  containerScrollView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: colors.MAIN_TEXT,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  changeDateButton: {
    height: 60,
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  showDateBlock: {
    height: 60,
    width: '80%',
    borderColor: colors.MAIN_TEXT,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 8,
  },
  image: {
    alignSelf: 'center',
  },
  textBtn: {
    color: colors.MAIN_TEXT,
  }
});

export default DistrictInfo;
