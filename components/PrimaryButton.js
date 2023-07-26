import {View, Pressable, Text, StyleSheet} from "react-native"
const PrimaryButton = ({buttnText, onPressed}) => {
    return (
       <View style={styles.buttonContainer}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=> pressed && styles.pressedStyle} onPress={onPressed}>
            <Text style={styles.buttonText}>{buttnText}</Text>
        </Pressable>
       </View>
    )
}
export default PrimaryButton

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: '#FF5F04',
        borderRadius: 12,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       paddingVertical: 18,
       width: '100%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 21.09,
        letterSpacing: 0.3,
        fontFamily: 'roboto-medium'
    },
    pressedStyle: {
        opacity: 0.5
    }

})