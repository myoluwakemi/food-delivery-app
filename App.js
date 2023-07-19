import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>
      <Image style={styles.landingLogo} source={require('./assets/images/landingLogo.png')}/>
      <Text style={styles.logoText}>OSHYNE FOODS</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5F04',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingLogo: {
    width: 100,
    height: 100,
    objectFit: 'contain'
  },
  logoText: {
    fontSize: 24,
    fontWeight: 500,
    color: "#fff",
    marginTop: 18
  }
});
