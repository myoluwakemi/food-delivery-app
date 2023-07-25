import { useLayoutEffect } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import IconButton from "../components/IconButton"
import PrimaryButton from "../components/PrimaryButton"


const Register = ({ navigation }) => {

    const handlePressedButton = () => {
        console.log('tapped!!')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<IconButton name='menu-outline' color='#000' size={18} />)
            }
        })

    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={18} color='#000' />
                <TextInput />

            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={18} color='#000' />
                <TextInput />

            </View>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={18} color='#000' />
                <TextInput />

            </View>
            <PrimaryButton buttnText='Create Account'/>

        </View>

    )
}
export default Register

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 100
       
    },
    inputContainer: {
        borderColor:'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
       paddingHorizontal: 18,
       paddingVertical: 18,
       width: '100%',
       marginBottom: 14

    }
})

