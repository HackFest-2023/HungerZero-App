import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Title, useTheme} from 'react-native-paper';

const SplashScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Title
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '15%',
        }}>
       HungerZero
      </Title>
      <LottieView
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SplashScreen;
