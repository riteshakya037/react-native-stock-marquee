import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

class MarqueeItem extends Component {
  render() {
    const {title, price, change, isGain, itemWidth, style} = this.props;
    return (
      <View style={[styles.item, {width: itemWidth}, style]} key={title}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.horizontal}>
          <Text style={styles.text}>{price}</Text>
          <Text style={[styles.textLight, isGain ? styles.gain : styles.loss]}>
            {change}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textLight: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 4,
    paddingBottom: 2,
  },
  gain: {
    color: '#15a767',
  },
  loss: {
    color: '#D35C6D',
  },
});

MarqueeItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  change: PropTypes.number,
  itemWidth: PropTypes.number,
  isGain: PropTypes.bool,
};

MarqueeItem.defaultProps = {
  title: '',
  price: 0,
  change: 0,
  isGain: false,
  itemWidth: 0,
};

export default MarqueeItem;
