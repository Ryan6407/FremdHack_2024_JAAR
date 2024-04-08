import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const OurAIScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image source={require('./assets/AI_Logo.png')} style={styles.logo} />
        <Text style={styles.title}>ChirpAI</Text>
        <Text style={styles.description}>
          ChirpAI is our intelligent virtual assistant designed to provide comprehensive support and guidance for mental wellness. Leveraging state-of-the-art machine learning techniques, ChirpAI offers a range of advanced functionalities including:
          {'\n\n'}
          - Anomaly Detection using K-Nearest Neighbors (KNN) algorithm: Identifies unusual patterns or behaviors in user interactions to proactively address potential concerns or issues.
          {'\n\n'}
          - Sentiment Analysis using Convolutional Neural Networks (CNNs): Analyzes the emotional tone of tweets to understand user sentiment, providing personalized responses and recommendations tailored to individual needs.
          {'\n\n'}
          - Potential Time Series Analysis: Tracks trends and fluctuations in user activity over time, allowing for predictive insights and adaptive support strategies.
          {'\n\n'}
          - Statistical Analysis of the Emotion of Each Tweet: Utilizes advanced statistical methods to quantify and analyze the emotional content of tweets, enabling a deeper understanding of user emotions and facilitating targeted interventions.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEEAFA',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF88A2',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default OurAIScreen;
