import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export const HomeTitle = () => {
    const router = useRouter()
	return (
		<TouchableOpacity style={style.titleContainer} onPress={()=>router.push("/account")}>
			<View style={style.iconeContainer}>
                <Ionicons name="person"  />
            </View>
			<Text style={style.text}>Hi Assoua</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
        alignItems:"center"
	},
    iconeContainer:{
        backgroundColor:Colors.light.accent,
        width:40,
        height:40,
        borderRadius:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"500",
        marginLeft:10
    }
	
});

