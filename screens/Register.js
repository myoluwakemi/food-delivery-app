import { useLayoutEffect } from "react"
import { Button, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import IconButton from "../components/IconButton"


const Register = ({navigation}) => {

    const handlePressedButton = () => {
        console.log('tapped!!')
    }
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: () => {
                return(<IconButton name='menu-outline' color='#000' size={18}/>)
            }
        })

    }, [])
    return (
        <View>
            <Text>hihi</Text>
           
        </View>
    )
}
export default Register