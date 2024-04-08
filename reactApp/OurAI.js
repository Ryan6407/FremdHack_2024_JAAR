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
          <Text style={styles.bulletPoint}>• Anomaly Detection using K-Nearest Neighbors (KNN) algorithm:</Text> Identifies unusual patterns or behaviors in user interactions to proactively address potential concerns or issues.
          {'\n\n'}
          <Text style={styles.bulletPoint}>• Sentiment Analysis using Convolutional Neural Networks (CNNs):</Text> Analyzes the emotional tone of tweets to understand user sentiment, providing personalized responses and recommendations tailored to individual needs.
          {'\n\n'}
          <Text style={styles.bulletPoint}>• Potential Time Series Analysis:</Text> Tracks trends and fluctuations in user activity over time, allowing for predictive insights and adaptive support strategies.
          {'\n\n'}
          <Text style={styles.bulletPoint}>• Statistical Analysis of the Emotion of Each Tweet:</Text> Utilizes advanced statistical methods to quantify and analyze the emotional content of tweets, enabling a deeper understanding of user emotions and facilitating targeted interventions.
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
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF88A2',
  },
  description: {
    fontSize: 18,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  bulletPoint: {
    fontSize: 18,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
});

export default OurAIScreen;
