import { View, Text, StyleSheet, Image, Button } from "react-native"
const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inneerContainer} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/delivery-bike.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.bannerText}>Fastest Delivery at your doorstep</Text>
                    <Text style={styles.bannerParagraph}>Order your food and get it delivered in few minutes</Text>

                </View>
            </View>
            <Button title="goto" onPress={() => navigation.navigate('Register')} />

        </View>


    )
}
export default LandingPage
// const windowWidth= Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingHorizontal: 18,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center'

    },
    inneerContainer: {
        justifyContent: 'center',
        alignContent: 'center'

    },
    imageContainer: {
        height: 400,
        display: 'flex',
        justifyContent: 'center',

        // width: windowWidth - 20, 
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain'
    },
    bannerText: {
        fontSize: 27,
        lineHeight: 31.64,
        letterSpacing: -0.3,
        fontFamily: 'roboto-bold',
        color: '#000'
    },
    bannerParagraph: {
        fontSize: 16,
        lineHeight: 18.75,
        letterSpacing: -0.3,
        color: '#000',
        marginTop: 12,
        fontFamily: 'roboto-small'


    },
    textContainer: {
        display: 'flex',
        position: 'absolute',
        bottom: 0





    }
})

