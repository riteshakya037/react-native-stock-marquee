import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MarqueeItem from './MarqueeItem';

const NO_PER_SCREEN = 5;
const itemWidth = Dimensions.get('window').width / NO_PER_SCREEN;

class StockMarquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

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

  componentDidMount() {
    this.startScroll();
  }

  // Clear interval when user closes
  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  startScroll() {
    this.activeInterval = setInterval(this.scrolling, 32);
  }

  scrolling = () => {
    // Start scrolling if there's more than one stock to display
    const {data} = this.props;
    const {currentPosition} = this.state;

    if (data.length > NO_PER_SCREEN) {
      // Increment position with each new interval
      const position = currentPosition + 0.5;
      this.ticker.scrollToOffset({offset: position, animated: false});
      const maxOffset = data.length * itemWidth;
      // Set animation to repeat at end of scroll
      if (currentPosition > maxOffset) {
        const offset = 0;
        this.ticker.scrollToOffset({
          offset,
          animated: false,
        });
        this.setState({currentPosition: offset});
      } else {
        this.setState({currentPosition: position});
      }
    }
  };

  render() {
    const {data} = this.props;
    return (
      <FlatList
        ref={(ref) => {
          this.ticker = ref;
        }}
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
