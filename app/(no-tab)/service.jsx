import { ServiceOptionCard } from "@/components/ServiceOptionCard";
import { Colors } from "@/constants/Colors";
import { DataBase } from "@/database/fake_data";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomModal } from "@/components/BottomModal";

export default function Service() {
	const [visible, setVisible] = useState(false);

	const { slug } = useLocalSearchParams();
	let data;

	if (slug == "Ophtamology") {
		data = DataBase.ophtamology;
	} else if (slug == "Cancerology") {
		data = DataBase.cancerology;
	} else {
		data = DataBase.cardiology;
	}

	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			title: `${slug} Services`,
		});
	}, [navigation]);
	return (
		<SafeAreaView edges={["bottom"]}>
			<ScrollView>
				<Text style={style.title}>Welcome to {slug} Services!</Text>
				<Text style={style.subtext}>
					Here is the best place to learn more about your {slug} health.
					Prevention is better than healing.
				</Text>
				<ServiceOptionCard
					title="Causes"
					content={data.causes}
					icon="help-circle"
				/>
				<ServiceOptionCard
					title="Symptoms"
					content={data.symptoms}
					icon="thermometer"
				/>
				<ServiceOptionCard
					title="Treatment"
					content={data.treatment}
					icon="medical"
				/>
				<ServiceOptionCard
					title="Consequences"
					content={data.consequences}
					icon="warning"
				/>

				<TouchableOpacity style={style.btn} onPress={() => setVisible(true)}>
					<Text style={style.btnText}>Start Analysis </Text>
					<Ionicons name="arrow-forward" size={24} color={Colors.dark.text} />
				</TouchableOpacity>
				<BottomModal
					isVisible={visible}
					close={() => setVisible(false)}
					title="Choose an option"
					btns={[
						{
							text: "Open camera",
							onPress: () => null,
							icon: "camera",
							color: "#000000",
						},
						{
							text: "Select from Gallery",
							onPress: () => null,
							icon: "image",
							color: "#6565c5",
						},
					]}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	title: {
		fontSize: 20,
		textAlign: "justify",
		fontWeight: "500",
		margin: 15,
		marginBottom: 5,
		color: Colors.light.primary,
	},
	subtext: {
		fontStyle: "italic",
		margin: 15,
		marginTop: 0,
		fontSize: 14,
		textAlign: "justify",
	},
	btn: {
		backgroundColor: Colors.light.primary,
		width: "90%",
		margin: "auto",
		marginTop: 20,
		marginBottom: 10,
		borderRadius: 50,
		padding: 10,
		flexDirection: "row",
		justifyContent: "center",
	},
	btnText: {
		color: Colors.dark.text,
		fontSize: 15,
	},
});
