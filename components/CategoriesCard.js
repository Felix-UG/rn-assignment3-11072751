import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';
const imageOne = require("../assets/young-woman-working-online.png");
const imageTwo = require("../assets/young-woman-working-at-desk.png");
const imageThree = require("../assets/Code-typing.png");
const imageFour = require("../assets/female-chef-cooking.png");
const imageFive = require("../assets/Conversation.png");
const imageSix = require("../assets/Customer-Survey-rafiki.png");
const imageSeven = require("../assets/online-review.png");
const imageEight = require("../assets/Electrician-bro.png");



export default function CategoriesCard (){
    return(
        <View style={styles.categories}>
            <Text style={styles.categoriesText}>Categories</Text>
            <ScrollView horizontal>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Exercise</Text>
                            <Text style={styles.textTwo}>12 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageOne}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Study</Text>
                            <Text style={styles.textTwo}>12 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageTwo}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Code</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageThree}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Cook</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageFour}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Communicate</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageFive}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Surveys</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageSix}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Review</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageSeven}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.textOne}>Repair</Text>
                            <Text style={styles.textTwo}>0 Tasks</Text>
                        </View>
                            <Image style={styles.image}source={imageEight}/>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        marginTop: hp('5%'),
        paddingLeft: wp('5%'),
        // backgroundColor: 'green',
        
    },
    categoriesText:{
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
    },
    card:{
        width: 186,
        height: 192, 
        backgroundColor: '#FBF9F7',
        marginTop: hp('2'),
        borderRadius: 20,
        marginRight: 30,
    
    }, 
    text:{
        // backgroundColor: 'lightgreen',
        paddingTop: 5,
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