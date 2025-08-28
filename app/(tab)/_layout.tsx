import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";

import { HomeNotificationTitle } from "@/components/HomeNotificationTitle";
import { HomeTitle } from "@/components/HomeTitle";
import {
	Platform,
	StyleSheet,
	TouchableOpacity,
	useColorScheme,
} from "react-native";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const router = useRouter();
	return (
		<Tabs
			screenOptions={{
				// headerShown: false,
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),

					headerTitle: () => <HomeTitle />,
					headerRight: () => <HomeNotificationTitle count={5} />,
				}}
			/>
			<Tabs.Screen
				name="history"
				options={{
					title: "History",
					headerTitleAlign: "center",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="time" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Account",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person" color={color} size={size} />
					),
					// headerTitle: "Account",
					headerTitleAlign: "center",
					headerRight: () => (
						<TouchableOpacity
							style={style.icon}
							onPress={() => router.push("/(no-tab)/profileUpdate")}
						>
							<Ionicons name="pencil" color={Colors.light.primary} size={24} />
						</TouchableOpacity>
					),
				}}
			/>
		</Tabs>
	);
}
const style = StyleSheet.create({
	menu: {
		marginLeft: 10,
	},
	icon: {
		marginRight: 10,
	},
});
