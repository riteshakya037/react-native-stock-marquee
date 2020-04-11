/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import StockMarquee from './src/components/StockMarquee';

const data = [
  'AAPL',
  'GOOGL',
  'GOOG',
  'MSFT',
  'FB',
  'TSM',
  'INTC',
  'ORCL',
  'CSCO',
  'NVDA',
  'IBM',
  'SAP',
  'TXN',
  'QCOM',
  'ADBE',
  'AVGO',
  'DCM',
  'CRM',
  'AABA',
  'BIDU',
  'ITW',
  'ATVI',
  'AMAT',
  'ADP',
  'MU',
  'VMW',
  'CTSH',
  'INTU',
  'NXPI',
  'INFY',
  'EA',
  'ETN',
  'HPQ',
  'ADI',
  'NOK',
  'FISV',
  'DXC',
  'LRCX',
  'NOW',
  'HPE',
  'WDC',
  'WDAY',
  'WIT',
  'TWTR',
  'ADSK',
  'SNAP',
  'WPP',
  'RHT',
  'KYO',
  'CERN',
].map((item) => ({
  title: item,
  price: parseInt((Math.random() * 1000).toFixed(2), 10),
  change: parseInt((Math.random() * 100).toFixed(2), 10),
  isGain: Math.floor(Math.random() * 10).toFixed(2) > 5,
}));

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        <StockMarquee data={data} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {backgroundColor: '#4F5E69', flex: 1},
});

export default App;
