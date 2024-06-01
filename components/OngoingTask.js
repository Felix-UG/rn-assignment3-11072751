import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';


export default function OngoingTask (){
    return(
        <View style={styles.ongoingTask}>
            <Text style={styles.ongoingTaskText}>Ongoing Task</Text>
        <ScrollView vertical={true}>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Mobile App Development</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Web Development</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Push Ups</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Go for a 2-mile walk</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Go for a 5-mile walk</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Attend an online lecture on React-Native</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Write a test on React-Native course </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Attend an online lecture on Github</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Start Project 1 on React-Native</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Complete a presentation on React-Native</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Write two tests on React-Native course</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Write two tests on Github course</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Complete two online courses</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Set personal goals for the upcoming week</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.ongoingTaskName}>Drink at least 8 glasses of water</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    ongoingTask:{
        // backgroundColor: 'green',
        paddingLeft: wp('5%'),
        marginTop: hp('5%'),
    },
    ongoingTaskText:{
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    },
    box:{
        width: wp('90%'),
        // height: hp('20'),
        height: 100,
        backgroundColor: '#FBF9F7',
        marginTop: hp('2%'),
        marginBottom: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E8D1BA',
        borderRadius:"15px",
    },
    ongoingTaskName:{
        paddingLeft: 15,
        fontSize: 20,
        
    }
})