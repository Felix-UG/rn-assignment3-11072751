import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoriesCard from './components/CategoriesCard';
import OngoingTask from './components/OngoingTask';

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
          <TouchableOpacity>
            <Image source={profileImage}/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.search}>
          <View style={styles.searchSpace}>
            <Image source={searchImage}/>
            <TextInput style={styles.searchBox} placeholder='Search' />
          </View>
          <View>
            <TouchableOpacity>
              <Image source={filterImage}/>
            </TouchableOpacity>
          </View>
        </View>
        
      <CategoriesCard/>
      <OngoingTask/>
      


      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
     
  },
  frame1: {
    marginTop: 52,
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: hp('2'),

  },
  group1: {
    
  },
  userName: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  }, 
  availableTask: {
    fontSize: hp('2%'),
  },
  profile:{
    alignSelf: 'center',
  },
  search: {
    width: wp('90%'),
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
    padding: 10,
    fontSize: hp('3%'),
    fontWeight: 'bold',
    
  }, 
  
});
