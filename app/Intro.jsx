import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Intro() {
    const router = useRouter()
    
	return (
		<View>
			<View style={style.ImgContainer}>
				<Image
					style={style.intro_img}
					source={require("@/assets/images/icon.png")}
				/>
			</View>
			<View style={style.banner}>
				<Text style={style.title}>Welcome To Health+</Text>
				<Text style={style.subtitle}>
					Join the team of Digital AI Assissted Medicine.
				</Text>

				<TouchableOpacity style={style.btn} onPress={()=>router.push("auth/Login")}>
					<Text style={style.btn_text}>Get Started</Text>
					<Ionicons name="arrow-forward" size={24} color={Colors.light.text} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	ImgContainer: {
		height: "60%",
		justifyContent: "center",
		alignItems: "center",
	},
	intro_img: {
		height: "80%",
		width: "80%",
	},

	banner: {
		height: "40%",
		backgroundColor: Colors.light.primary,
		borderTopEndRadius: 50,
		borderTopStartRadius: 50,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		color: Colors.dark.text,
	},
	title: {
		fontSize: 30,
		color: Colors.dark.text,
	},
	subtitle: {
		textAlign: "center",
		fontSize: 16,
		color: Colors.dark.text,
	},
    btn:{
        backgroundColor:Colors.dark.accent,
        padding:15,
        width:"90%",
        borderRadius:50,
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
    },
    btn_text:{
        textAlign:"center",
        color:Colors.light.text,
        fontWeight:"500"
    }
});
