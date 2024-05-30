import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const profileImage = require("./assets/profile-image.png")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.frame1}>
        <View style={styles.group1}>
          <Text style={styles.userName}>Hello , Devs</Text>
          <Text style={styles.availableTask}>14 tasks today</Text>
        </View>
        <View style={styles.profile}>
          <Image source={profileImage}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    
    
  },
  frame1: {
    marginTop: 52,
    width: wp('90%'),
    // backgroundColor: '#ff0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'

  },
  group1: {
    // backgroundColor: 'tomato',
  },
  userName: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  }
});
