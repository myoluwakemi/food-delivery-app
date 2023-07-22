import { Pressable,View, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

const IconButton = ( {name, size, color, onPressed}) => {
    return(
          <View style={styles.iconWrapper}  >
        <Pressable style={({pressed})=> pressed && styles.pressedStyle } android_ripple={{color: '#000'}} onPress={onPressed}>
            <Ionicons name={name} size={size} color={color}/>
            
        </Pressable>
        </View>

    )
}
export default IconButton

const styles = StyleSheet.create({
    iconWrapper: {
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 1,
        padding: 6

    },
    pressedStyle: {
        opacity: 0.4

    }
})