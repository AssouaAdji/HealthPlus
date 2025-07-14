import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
export const ProfileInfo = ({ icon, name, value }) => {
	return (
		<View style={style.container}>
			<Ionicons name={icon} color={Colors.light.primary} size={24}/>
			<View style={style.info_container}>
				<Text style={style.name}>{name}</Text>
				<Text>{value}</Text>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		width: "90%",
        borderBottomColor:Colors.light.icon,
        borderBottomWidth:1,
        margin:"auto",
        flexDirection:"row",
        alignItems:"center",
        paddingBottom:10,
        marginBottom:20,
        justifyContent:"space-between"
	},
    info_container:{
        width:"90%",
       flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between" 
    },
    name:{
        fontWeight:"500",
        fontSize:15
    }
});
