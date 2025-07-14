import { HomeNotificationTitle } from "@/components/HomeNotificationTitle";
import { HomeTitle } from "@/components/HomeTitle";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
	const route = useRoute();
	const activeTab = route.name;
	const [appBarData, SetAppBarData] = useState({});
	const router = useRouter();
	console.error(`Active Tab:${activeTab}`);

	switch (activeTab) {
		case "home":
			appBarData.headerTitle = () => <HomeTitle />;
			appBarData.headerRight = () => <HomeNotificationTitle count={5} />;
			break;
		case "history":
			break;
		case "account":
			appBarData.headerTitle = () => <HomeTitle />;
			appBarData.headerRight = () => (
				<TouchableOpacity
					style={style.icon}
					onPress={() => router.push("/(no-tab)/profileUpdate")}
				>
					<Ionicons name="pencil" color={Colors.light.primary} size={24} />
				</TouchableOpacity>
			);
			break;
		default:
			break;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="(tab)" // This is the name of the page and must match the url from root
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
