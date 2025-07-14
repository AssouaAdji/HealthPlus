import { Card } from "@/components/Card";
import { ExtraCard } from "@/components/ExtraCard";
import { Modale } from "@/components/Modal";
import { ServiceCard } from "@/components/ServiceCard";
import { Colors } from "@/constants/Colors";
import { useRoute } from "@react-navigation/native";
import {
	// useFocusEffect,
	useRouter,
} from "expo-router";
import {
	useEffect,
	// useCallback,
	useState,
} from "react";
import {
	// BackHandler,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Swiper from "react-native-swiper";

export default function Index() {
	const router = useRouter();
	const [visible, setVisible] = useState(false);

	useEffect(() => {});

	// 	useFocusEffect(
	// 	useCallback(() => {
	// 		const backAction = () => {
	// 			setVisible(true)
	// 			return true;
	// 		};

	// 		const backHandler = BackHandler.addEventListener(
	// 			"hardwareBackPress",
	// 			backAction
	// 		);
	// 		return () => backHandler.remove();
	// 	}, [])
	// );

	return (
		<View>
			<ScrollView>
				<Modale isVisible={visible} close={() => setVisible(false)} />
				<Swiper
					style={style.recomList}
					showsButtons={false}
					autoplay={true}
					autoplayTimeout={2.5}
					showsPagination={true}
					loop={true}
					activeDotColor={Colors.light.primary}
					scrollAnimationDuration={500}
				>
					<View>
						<Card
							title="Care of Cardiologic health"
							content="Keep your heart well with our AI assisted sytem of Health+"
							image={require("@/assets/images/heart.png")}
						/>
					</View>
					<View>
						<Card
							title="Is your sight clear ?"
							content="Prevent your eyes from diseases by detecting and snipping symptoms"
							image={require("@/assets/images/eye-glass.png")}
						/>
					</View>
					<View>
						<Card
							title="Take care of your eyes"
							content="Prevent your eyes from diseases by detecting and snipping symptoms"
							image={require("@/assets/images/eye-doctor.png")}
						/>
					</View>
					<View>
						<Card
							title="We can stop cancer spreading!"
							content="Prevent cancer's symptoms by using large language pre-trained model."
							image={require("@/assets/images/cancer.png")}
						/>
					</View>
				</Swiper>
				<View style={style.serviceContainer}>
					<Text style={style.serviceTitle}>Services</Text>
					<View style={style.serviceList}>
						<ServiceCard
							name="Eye Care"
							icon="eye"
							color="#AdD8E6"
							onPress={() =>
								router.navigate({
									pathname: "/service",
									params: { slug: "Ophtamology" },
								})
							}
						/>
						<ServiceCard
							name="Cancer"
							icon="ribbon"
							color="#FFC080"
							onPress={() =>
								router.navigate({
									pathname: "/service",
									params: { slug: "Cancerology" },
								})
							}
						/>
						<ServiceCard
							name="Cardiology"
							icon="heart"
							color="#C51077"
							onPress={() =>
								router.navigate({
									pathname: "/service",
									params: { slug: "Cardiology" },
								})
							}
						/>
					</View>
				</View>
				<View style={style.serviceContainer}>
					<Text style={style.serviceTitle}>Capture image</Text>
					<ExtraCard
						icon="camera"
						name="Capture using Camera"
						color="#000000"
					/>
				</View>
				<View style={style.serviceContainer}>
					<Text style={style.serviceTitle}>Select image</Text>
					<ExtraCard
						icon="image"
						name="Select an image from gallery"
						color="#6565c5"
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const style = StyleSheet.create({
	recomList: {
		height: 190,
	},
	serviceContainer: {
		width: "90%",
		backgroundColor: Colors.light.background,
		margin: "auto",
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10,
		shadowColor: Colors.dark.background,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		padding: 10,
	},
	serviceTitle: {
		fontSize: 18,
		fontWeight: "500",
		marginBottom: 10,
	},
	serviceList: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
});
