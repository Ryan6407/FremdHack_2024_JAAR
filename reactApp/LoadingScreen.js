import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('AnalyticsScreen'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/FHS_Hack_Logo.png')}
        style={styles.logo}
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
