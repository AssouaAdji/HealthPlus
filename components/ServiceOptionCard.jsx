import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ServiceOptionCard = ({
	title = "Service Title",
	content = "Service content",
	icon,
}) => {
	const [isExpended, setIsExpended] = useState(false);

	const handleToggle = () => {
		setIsExpended(!isExpended);
	};

	return (
		<View style={style.container}>
			<TouchableOpacity style={style.headerContainer} onPress={handleToggle}>
				<View style={style.textContainer}>
					<View style={style.notIconContainer}>
						<Ionicons name={icon} size={20} color={Colors.light.text} />
					</View>
					<Text style={style.text} numberOfLines={1}>
						{title}
					</Text>
				</View>
				<View style={style.iconeContainer}>
					{isExpended ? (
						<Ionicons name="chevron-up" size={20} color="black" />
					) : (
						<Ionicons name="chevron-down" size={20} color="black" />
					)}
				</View>
			</TouchableOpacity>
			{isExpended && (
				<View style={style.containContainer}>
					<Text style={style.content}>{content.map(e=>`- ${e}\n`)}</Text>
				</View>
			)}
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		width: "95%",
		backgroundColor: Colors.light.background,
		height: "auto",
		margin: "2%",
		marginTop: 10,
		marginBottom: 0,
		borderRadius: 10,
		shadowColor: Colors.dark.background,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: 60,
	},
	notIconContainer: {
		backgroundColor: Colors.light.accent,
		width: 50,
		height: 50,
		borderRadius: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		width: "90%",
		paddingLeft: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	iconeContainer: {
		width: "10%",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 15,
		fontWeight: "500",
		marginLeft: 10,
	},
	containContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		margin: "auto",
		marginBottom: 10,
	},
	content: {
		textAlign: "justify",
		fontSize: 14,
	},
});
