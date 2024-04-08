import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Twitter Analytics</Text>
      <View style={styles.analyticsContainer}>
        <Text style={styles.analyticsText}>Followers: 10,000</Text>
        <Text style={styles.analyticsText}>Tweets: 5,000</Text>
        <Text style={styles.analyticsText}>Likes: 8,000</Text>
        <Text style={styles.analyticsText}>Retweets: 3,000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 20,
  },
  analyticsContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  analyticsText: {
    fontSize: 18,
    color: '#707070',
    marginBottom: 10,
  },
});

export default AnalyticsScreen;
