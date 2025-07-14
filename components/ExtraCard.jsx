import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ExtraCard = ({icon,name, color}) => {
  return (
    <TouchableOpacity style={style.container}>
        <Ionicons name={icon} size={30} color={color}/>
        <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        width:"100%",
        height:90,
        justifyContent:"center",
        alignItems:"center"
    },text:{
        fontSize:15,
        textAlign:"center"
    }
})
