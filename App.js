import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-web';
const profileImage = require("./assets/profile-image.png");
const searchImage = require("./assets/search-image.png");
const filterImage = require("./assets/filter.png");

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
      <ScrollView style={styles.scrollView}>
        <View style={styles.search}>
          <View style={styles.searchSpace}>
            <Image source={searchImage}/>
            <TextInput style={styles.searchBox} placeholder='Search' />
          </View>
          <View>
            <Image source={filterImage}/>
          </View>
        </View>


      </ScrollView>
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
    // backgroundColor: 'red',
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
  }, 
  search: {
    width: wp('90%'),
    // backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    width: wp('70%'),
    borderRadius: 20, 
    paddingLeft: 10,
  },
  searchBox: {
    height: 50,
    width: wp('60%'),
    paddingLeft: 10,
    fontSize: hp('2'),
    border: '',
    fontWeight: 'bold'
  }
});
