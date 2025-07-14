import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ( props ) => {
    const handlePress = ()=>{
        if (props.onPress) {
            props.onPress()
        }
    }
	return (
		<TouchableOpacity style={style.btn} onPress={handlePress}>
			<Text style={style.text}>{props.label}</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	btn: {
		backgroundColor: Colors.light.primary,
        width:"90%",
        margin:"auto",
        marginTop:20,
        marginBottom:10,
        borderRadius:50,
        padding:10
	},
    text:{
        textAlign:"center",
        color:Colors.dark.text,
        fontSize:15
    }
});
