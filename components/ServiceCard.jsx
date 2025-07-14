import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ServiceCard = ({icon,name, color, onPress=()=>{}}) => {
  return (
    <TouchableOpacity style={style.container} onPress={()=>onPress()}>
        <Ionicons name={icon} size={30} color={color}/>
        <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        width:90,
        height:90,
        justifyContent:"center",
        alignItems:"center"
    },text:{
        fontSize:15,
        textAlign:"center"
    }
})
