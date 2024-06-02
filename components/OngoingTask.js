import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const tasks = [
    {key: '1', taskName: 'Mobile App Development'},
    {key: '2', taskName: 'Web Development'},
    {key: '3', taskName: 'Push Ups'},
    {key: '4', taskName: 'Go for a 2-mile walk'},
    {key: '5', taskName: 'Go for a 5-mile walk'},
    {key: '6', taskName: 'React-Native'},
    {key: '7', taskName: 'React-Native Project 3'},
    {key: '8', taskName: 'React-Native Presentation'},
    {key: '9', taskName: 'Github'},
    {key: '10', taskName: 'Github Quiz'},
    {key: '11', taskName: 'Github Presentation'},
    {key: '12', taskName: 'Complete React-Native course'},
    {key: '13', taskName: 'Complete Github course'},
    {key: '14', taskName: 'Complete two courses'},
    {key: '15', taskName: 'Drink at least 8 glasses of water'},
]


const OngoingTask = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity>
        <View style={styles.ongoingTaskBox}>
            <Text style={styles.ongoingTaskName}>{item.taskName}</Text>
        </View>
        </TouchableOpacity>
    );


    return(
        <View style={styles.ongoingTask}>
            <Text style={styles.ongoingTaskText}>Ongoing Task</Text>
            <FlatList 
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    ongoingTask:{
        paddingLeft: wp('5%'),
        marginTop: hp('5%'),
        // backgroundColor: 'blue'
    }, 
    ongoingTaskText:{
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    },
    ongoingTaskBox:{
        width: wp('90%'),
        height: hp('15'),
        backgroundColor: '#FBF9F7',
        marginTop: hp('2%'),
        marginBottom: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E8D1BA',
        borderRadius: 10,
    },
    ongoingTaskName:{
        paddingLeft: 15,
        fontSize: hp('2.5'),
        fontWeight: 'bold',
    }
})

export default OngoingTask; 