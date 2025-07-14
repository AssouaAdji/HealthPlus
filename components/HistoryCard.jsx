import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const HistoryCard = ({ title="History", date="01/02/2000" }) => {
	return (
		<View style={style.container}>
			<View style={style.textContainer}>
				<Text style={style.text} numberOfLines={1}>{title}</Text>
				<Text style={style.subtext}>{date}</Text>
			</View>
			<View style={style.iconeContainer}>
				<Ionicons
					name="trash"
					size={20}
					color={Colors.light.accent}
				/>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		width: "95%",
		backgroundColor: Colors.light.background,
		height: 60,
		margin: "2%",
		marginTop: 10,
		marginBottom: 0,
		borderRadius: 10,
		shadowColor: Colors.dark.background,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	textContainer: {
		width: "90%",
		paddingLeft: 10,
	},
	iconeContainer: {
		width: "10%",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 15,
		fontWeight: "500",
	},
	subtext: {
		fontSize: 12,
	},
});
