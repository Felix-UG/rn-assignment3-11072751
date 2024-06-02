import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const imageOne = require('../assets/young-woman-working-online.png');
const imageTwo = require("../assets/young-woman-working-at-desk.png");
const imageThree = require("../assets/Code-typing.png");
const imageFour = require("../assets/female-chef-cooking.png");
const imageFive = require("../assets/Conversation.png");
const imageSix = require("../assets/Customer-Survey-rafiki.png");
const imageSeven = require("../assets/online-review.png");
const imageEight = require("../assets/Electrician-bro.png");

const cards = [
    {key: '1', textOne: 'Exercise', textTwo: '12 Tasks', image: imageOne },
    {key: '2', textOne: 'Study', textTwo: '12 Tasks', image: imageTwo },
    {key: '3', textOne: 'Code', textTwo: '0 Tasks', image: imageThree },
    {key: '4', textOne: 'Cook', textTwo: '0 Tasks', image: imageFour },
    {key: '5', textOne: 'Communicate', textTwo: '0 Tasks', image: imageFive },
    {key: '6', textOne: 'Surveys', textTwo: '0 Tasks', image: imageSix },
    {key: '7', textOne: 'Review', textTwo: '0 Tasks', image: imageSeven },
    {key: '8', textOne: 'Repair', textTwo: '0 Tasks', image: imageEight },
]


const CategoriesCard = () =>{
    const renderItem = ({ item }) => (
        <TouchableOpacity>
        <View style={styles.card}>
            <View style={styles.text}>
                <Text style={styles.textOne}>{item.textOne}</Text>
                <Text style={styles.textTwo}>{item.textTwo}</Text>
            </View> 
            <Image source={ item.image } style={styles.image}/>
        </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.categories}>
            <Text style={styles.categoriesCardText}>Categories</Text>
            <FlatList
                data={cards}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />    
        </View>
    )
};

const styles = StyleSheet.create({
    categories: {
        marginTop: hp('5%'),
        paddingLeft: wp('5%'),
    },
    categoriesCardText:{
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    }, 
    card:{
        width: 186,
        height: 192,
        backgroundColor: '#FBF9F7',
        marginTop: hp('2%'),
        borderRadius: 20,
        marginRight: 30,
    }, 
    text:{
        paddingTop: 10,
        paddingLeft: 15,
    }, 
    textOne:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    textTwo:{
        fontSize: 12,
    },
    image:{
        alignSelf: 'center',
    }


})
export default CategoriesCard;