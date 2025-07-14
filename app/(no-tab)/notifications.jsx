import { NotificationCard } from "@/components/NotificationCard";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function notifications() {
	return (
		<SafeAreaView edges={["bottom"]}>
			<ScrollView style={style.container}>
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
			</ScrollView>
		</SafeAreaView> 
	);
}

const style = StyleSheet.create({
	container:{
		paddingBottom:10
	}
})