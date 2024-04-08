import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('AddTweet');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/FHS_Hack_Logo.png')}
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
      />
      <Text style={styles.loadingText}>Loading...</Text>
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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF88A2',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default LoadingScreen;
