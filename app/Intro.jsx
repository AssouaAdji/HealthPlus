import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react"; // Import useState
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Intro() {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(0); // State to manage current page

	const onboardingPages = [
		{
			image: require("@/assets/images/icon.png"),
			title: "Welcome To Health+",
			subtitle: "Join the team of Digital AI Assisted Medicine.",
		},
		{
			image: require("@/assets/images/heart.png"), // Placeholder image for page 2
			title: "Personalized Health Insights",
			subtitle: "Get tailored recommendations based on your data.",
		},
		{
			image: require("@/assets/images/eye.png"), // Placeholder image for page 3
			title: "Connect with Experts",
			subtitle: "Access a network of healthcare professionals.",
		},
	];

	const handleNext = () => {
		if (currentPage < onboardingPages.length - 1) {
			setCurrentPage(currentPage + 1);
		} else {
			router.push("auth/Login"); // Go to login after last page
		}
	};

	const handleSkip = () => {
		router.push("auth/Login"); // Skip directly to login
	};

	const currentPageData = onboardingPages[currentPage];

	return (
		<SafeAreaView edges={["bottom", "top"]}>
			<View style={style.fullScreen}>
				<View style={style.ImgContainer}>
					<Image style={style.intro_img} source={currentPageData.image} />
				</View>
				<View style={style.banner}>
					<Text style={style.title}>{currentPageData.title}</Text>
					<Text style={style.subtitle}>{currentPageData.subtitle}</Text>

					<View style={style.paginationContainer}>
						{onboardingPages.map((_, index) => (
							<View
								key={index}
								style={[
									style.paginationDot,
									index === currentPage ? style.paginationDotActive : {},
								]}
							/>
						))}
					</View>

					<View style={style.navigationButtons}>
						{currentPage < onboardingPages.length - 1 && (
							<TouchableOpacity style={style.skipBtn} onPress={handleSkip}>
								<Text style={style.btn_text}>Skip</Text>
							</TouchableOpacity>
						)}
						<TouchableOpacity style={style.btn} onPress={handleNext}>
							<Text style={style.btn_text}>
								{currentPage === onboardingPages.length - 1
									? "Get Started"
									: "Next"}
							</Text>
							<Ionicons
								name="arrow-forward"
								size={24}
								color={Colors.light.text}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	fullScreen: {
		// flex: 1,
		backgroundColor: Colors.light.background,
		// borderColor: "red",
		// borderWidth: 5,
		height: "100%",
	},
	ImgContainer: {
		flex: 2, // Takes 2 parts of the available space
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 50, // Add some top padding
	},
	intro_img: {
		width: "90%", // Make image slightly larger
		height: "90%", // Make image slightly larger
		resizeMode: "contain",
	},

	banner: {
		flex: 1, // Takes 1 part of the available space
		backgroundColor: Colors.light.primary,
		borderTopEndRadius: 50,
		borderTopStartRadius: 50,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around", // Distribute space more evenly
		color: Colors.dark.text,
		paddingHorizontal: 20,
		paddingVertical: 20, // Add vertical padding
	},
	title: {
		fontSize: 28, // Slightly smaller font for better fit
		color: Colors.dark.text,
		textAlign: "center",
		marginBottom: 10,
		fontWeight: "bold", // Make title bolder
	},
	subtitle: {
		textAlign: "center",
		fontSize: 15, // Slightly smaller font
		color: Colors.dark.text,
		marginBottom: 15, // Adjust margin
		paddingHorizontal: 10, // Add horizontal padding to subtitle
	},
	btn: {
		backgroundColor: Colors.dark.accent,
		padding: 15,
		width: "65%", // Adjusted width for better spacing with skip button
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	skipBtn: {
		backgroundColor: Colors.light.tint,
		padding: 15,
		width: "30%", // Adjusted width
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	btn_text: {
		textAlign: "center",
		color: Colors.light.text,
		fontWeight: "500",
		marginRight: 5,
		fontSize: 16, // Ensure consistent font size
	},
	paginationContainer: {
		flexDirection: "row",
		marginBottom: 15, // Adjust margin
	},
	paginationDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: Colors.light.accent,
		marginHorizontal: 5,
	},
	paginationDotActive: {
		backgroundColor: Colors.dark.text,
	},
	navigationButtons: {
		flexDirection: "row",
		justifyContent: "center", // Center the buttons
		width: "100%", // Take full width to control internal spacing
		marginTop: 10, // Adjust margin
	},
});
