import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { InputCard } from "@/components/InputCard";

export default function Login() {
	const router = useRouter();

	return (
		<SafeAreaView>
			<KeyboardAvoidingView behavior="padding">
				<ScrollView style={style.view}>
					<View style={style.container}>
						<View style={style.logoContainer}>
							<Image
								source={require("@/assets/images/icon.png")}
								style={{
									width: 150,
									height: 150,
									borderRadius: 50,
									// marginBottom: 20,
								}}
							/>
						</View>
						<Text style={style.text}>
							Join Us Today to stay tuned and benefit of medicine AI based Tech
						</Text>
						<InputCard label="Username" />
						<InputCard label="Phone Number" />
						<InputCard label="Birth Date" />
						<InputCard label="Location" />
						<InputCard label="Password" />
						<InputCard label="Confirm Password" />
						<Button label="Sign Up" />
						<Text style={style.text}>Or</Text>
						<TouchableOpacity style={style.googleButton}>
							{/* Using Ionicons for Google icon */}
							<Ionicons name="logo-google" size={24} color="white" />
							<Text style={style.buttonText}>Google Account</Text>
						</TouchableOpacity>

						<Text style={style.text}>
							Already have account ?{" "}
							<TouchableOpacity onPress={() => router.push("/auth/Login")}>
								<Text style={{ color: Colors.light.primary }}>Sign In</Text>
							</TouchableOpacity>
						</Text>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	view: {
		height: "100%",
		backgroundColor: Colors.light.background,
	},
	container: {
		padding: 20,
	},
	logoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		justifyContent: "center",
	},

	text: {
		fontSize: 18,
		marginBottom: 20,
		textAlign: "center",
		color: "#666",
		marginHorizontal: 20,
	},

	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginVertical: 10,
		borderRadius: 5,
	},
	button: {
		backgroundColor: Colors.light.primary,
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
	},
	buttonText: {
		color: Colors.dark.text,
		fontSize: 16,
		textAlign: "center",
	},
	googleButton: {
		width: "90%",
		margin: "auto",
		backgroundColor: "#4285F4",
		padding: 10,
		borderRadius: 50,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		color: "#fff",
		marginBottom: 10,
	},
});
