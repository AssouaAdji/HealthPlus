import { Colors } from "@/constants/Colors";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export const Card = ({ image, title, content }) => {
	const width = Dimensions.get("window").width;
	return (
		<View style={[style.container, { width: width * 0.95 }]}>
			<View style={style.TextContainer}>
				<Text style={style.title}>{title}</Text>
				<Text style={style.sub_title}>{content}</Text>
			</View>
			<View style={style.imgContainer}>
				<Image source={image} style={style.image} />
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		height: 170,
		borderColor: Colors.dark.primary,
		borderWidth: 3,
		margin: 10,
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: Colors.light.background,
	},
	imgContainer: {
		width: "45%",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "95%",
		height: "95%",
	},
	TextContainer: {
		flexDirection: "column",
		width: "55%",
		justifyContent: "center",
	},
	title: {
		fontSize: 15,
		fontWeight: "500",
		margin: 10,
		color: Colors.dark.secondary,
	},
	sub_title: {
		margin: 10,
		marginTop: 0,
	},
});
