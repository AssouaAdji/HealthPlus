import { ProfileInfo } from "@/components/ProfileInfo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function account() {
	return (
		<View style={style.container}>
			<View style={style.profile_card}>
				<View style={style.imgContainer}>
					<View style={style.imgOutline}>
						<Ionicons name="person" size={50} color={Colors.light.primary} />
					</View>
				</View>
				<View style={style.profile_nameContainer}>
					<Text style={style.profile_name}>Assoua Adji</Text>
				</View>
			</View>
			<View>
				<ProfileInfo icon="call" name="Phone Number" value="696117330" />
				<ProfileInfo
					icon="mail"
					name="Email Address"
					value="assouaadji00@gmail.com"
				/>
				<ProfileInfo icon="location" name="Location" value="Maroua" />
				<ProfileInfo icon="calendar" name="Birth Date" value="01/04/2000" />
			</View>
		</View>
	);
}
const style = StyleSheet.create({
	profile_card: {
		width: "90%",
		backgroundColor: Colors.light.background,
		height: 170,
		margin: "5%",
		marginTop: 10,
		borderRadius: 10,
		shadowColor: Colors.dark.background,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: "row",
	},
	imgContainer: {
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},

	imgOutline: {
		justifyContent: "center",
		alignItems: "center",
		width: 120,
		height: 120,
		borderRadius: "100%",
		borderWidth: 2,
		borderColor: Colors.light.primary,
	},
	profile_nameContainer: {
		width: "50%",
		justifyContent: "center",
		// alignItems: "center",
	},
	profile_name: {
		fontWeight: "500",
		fontSize: 18,
		// textAlign: "center",
		marginRight: 10,
	},
});
