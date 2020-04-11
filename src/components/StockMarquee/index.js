import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MarqueeItem from './MarqueeItem';

const NO_PER_SCREEN = 5;
const itemWidth = Dimensions.get('window').width / NO_PER_SCREEN;

class StockMarquee extends Component {
  _renderItem = (item, index) => {
    return (
      <MarqueeItem
        title={item.title}
        price={item.price}
        change={item.change}
        isGain={item.isGain}
        itemWidth={itemWidth}
        style={{
          marginStart: index === 0 ? 16 : 0,
        }}
      />
    );
  };

  render() {
    const {data} = this.props;
    return (
      <FlatList
        getItemLayout={(_, index) => ({
          length: data.length,
          offset: itemWidth * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => this._renderItem(item, index)}
        horizontal
        style={styles.wrapper}
        keyExtractor={(item, index) => item.title + index}
      />
    );
  }
}

StockMarquee.propTypes = {
  stockData: PropTypes.array,
};

StockMarquee.defaultProps = {
  stockData: [],
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 40,
    flexGrow: 0,
  },
});

export default StockMarquee;
